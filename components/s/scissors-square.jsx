import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vjnj9abfa.css';
import '../../css/d/d2umvjsxg.css';
import '../../css/y/yopadjb1x.css';
import '../../css/j/jhxi-trnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vjnj9abfa"/><circle class="d2umvjsxg"/><circle class="yopadjb1x"/><rect class="jhxi-trnl"/></g>`,
		"fallback": "lucide:scissors-square",
	});
}

export default Component;
