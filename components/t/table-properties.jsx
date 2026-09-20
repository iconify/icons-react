import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cvwo9q_mn.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/p/pylkmrjoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cvwo9q_mn"/><rect class="jhxi-trnl"/><path class="pylkmrjoa"/></g>`,
		"fallback": "lucide:table-properties",
	});
}

export default Component;
