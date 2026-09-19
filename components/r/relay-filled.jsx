import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o63_pcrtn.css';
import '../../css/x/x6pji6bmo.css';
import '../../css/w/w33bj_o2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o63_pcrtn"/><path class="x6pji6bmo"/><path class="w33bj_o2h"/></g>`,
		"fallback": "bitcoin-icons:relay-filled",
	});
}

export default Component;
