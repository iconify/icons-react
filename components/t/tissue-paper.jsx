import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rhzqnybfy.css';
import '../../css/x/xwt_qrbis.css';
import '../../css/v/vhzi37bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rhzqnybfy"/><path class="xwt_qrbis"/><path class="vhzi37bzf"/></g>`,
		"fallback": "hugeicons:tissue-paper",
	});
}

export default Component;
