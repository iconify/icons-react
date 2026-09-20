import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/llmotgtmg.css';
import '../../css/j/j_cmhzgyl.css';
import '../../css/d/ddso4ebsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="llmotgtmg"/><path class="j_cmhzgyl"/><path class="ddso4ebsl"/></g>`,
		"fallback": "streamline-freehand-color:modern-payment-contactless",
	});
}

export default Component;
