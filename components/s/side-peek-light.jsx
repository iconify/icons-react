import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eepffg-pa.css';
import '../../css/u/ueg3pbdmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eepffg-pa"/><path class="ueg3pbdmp"/></g>`,
		"fallback": "stash:side-peek-light",
	});
}

export default Component;
