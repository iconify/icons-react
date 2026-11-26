import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/trz9rjbpe.css';
import '../../css/y/ymihmcc1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="trz9rjbpe"/><path class="ymihmcc1m"/></g>`,
		"fallback": "xero-emoji:paperclip",
	});
}

export default Component;
