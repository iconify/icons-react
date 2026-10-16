import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlsr1qbum.css';
import '../../css/l/l59iq9btv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlsr1qbum"/><path class="l59iq9btv"/>`,
		"fallback": "energy-icons:water-butt-20-bold",
	});
}

export default Component;
