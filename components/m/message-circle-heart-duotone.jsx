import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cr23qknpj.css';
import '../../css/c/c11qqfjej.css';
import '../../css/f/fceu03qmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cr23qknpj"/><path clip-rule="evenodd" class="c11qqfjej"/><path class="fceu03qmq"/></g>`,
		"fallback": "lucide-extended:message-circle-heart-duotone",
	});
}

export default Component;
