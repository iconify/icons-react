import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zc8wb1-pt.css';
import '../../css/l/ljz9ytrjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zc8wb1-pt"/><path class="ljz9ytrjy"/></g>`,
		"fallback": "streamline-sharp-color:voice-mail-flat",
	});
}

export default Component;
