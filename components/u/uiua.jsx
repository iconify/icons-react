import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sury3b-zu.css';
import '../../css/w/w_iz3k4gm.css';
import '../../css/c/cjn1osbna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sury3b-zu"><path class="w_iz3k4gm"/><path class="cjn1osbna"/></g>`,
		"fallback": "material-icon-theme:uiua",
	});
}

export default Component;
