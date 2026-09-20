import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyu-pdxjs.css';
import '../../css/v/v-coqgbxr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qyu-pdxjs"/><path class="v-coqgbxr"/>`,
		"fallback": "selfhst:nextpvr",
	});
}

export default Component;
