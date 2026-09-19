import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scsyisb_l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scsyisb_l"/>`,
		"fallback": "fa7-brands:lumon-drop",
	});
}

export default Component;
