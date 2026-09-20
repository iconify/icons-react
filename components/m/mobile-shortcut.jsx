import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/n/nrjwegeha.css';
import '../../css/u/u0o58acjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="nrjwegeha"/><path class="u0o58acjl"/></g>`,
		"fallback": "tdesign:mobile-shortcut",
	});
}

export default Component;
