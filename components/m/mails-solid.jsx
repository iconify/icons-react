import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xqkvuwrqj.css';
import '../../css/d/ddhn4jyik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xqkvuwrqj"/><path class="ddhn4jyik wm-a"/></g>`,
		"fallback": "withicons:mails-solid",
	});
}

export default Component;
