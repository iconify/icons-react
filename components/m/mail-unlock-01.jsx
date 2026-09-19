import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f3v4tybxo.css';
import '../../css/w/w3m_3tb8c.css';
import '../../css/a/ajuvr4bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f3v4tybxo"/><path class="w3m_3tb8c"/><path class="ajuvr4bok"/></g>`,
		"fallback": "hugeicons:mail-unlock-01",
	});
}

export default Component;
