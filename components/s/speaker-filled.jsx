import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wxigyaboj.css';
import '../../css/q/qn6jvzbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wxigyaboj"/><path class="qn6jvzbhc"/></g>`,
		"fallback": "lucide-extended:speaker-filled",
	});
}

export default Component;
