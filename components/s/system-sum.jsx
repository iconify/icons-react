import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/p/p1xl0obnf.css';
import '../../css/r/r_-y31b5j.css';
import '../../css/e/eac117bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="p1xl0obnf"/><path class="r_-y31b5j"/><path class="eac117bae"/></g>`,
		"fallback": "tdesign:system-sum",
	});
}

export default Component;
