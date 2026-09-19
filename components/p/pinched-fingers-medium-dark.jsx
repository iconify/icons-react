import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekmxezb0z.css';
import '../../css/a/axrl_0xbh.css';
import '../../css/f/f9p-pmbhs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ekmxezb0z"/><path class="axrl_0xbh"/><path class="f9p-pmbhs"/></g>`,
		"fallback": "fluent-emoji-flat:pinched-fingers-medium-dark",
	});
}

export default Component;
