import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7_bml7xz.css';
import '../../css/k/kte3hjbxw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7_bml7xz"/><path class="kte3hjbxw"/>`,
		"fallback": "energy-icons:network-nodes-20",
	});
}

export default Component;
