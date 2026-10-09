import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so2mw5bhs.css';
import '../../css/n/nnuycobpf.css';
import '../../css/n/ney70wbxn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so2mw5bhs"/><path class="nnuycobpf"/><path class="ney70wbxn"/>`,
		"fallback": "energy-icons:mountain-river-20-bold",
	});
}

export default Component;
