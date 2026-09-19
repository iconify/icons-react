import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tsze9kbyt.css';
import '../../css/n/npx-8cbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tsze9kbyt"/><path class="npx-8cbxo"/></g>`,
		"fallback": "gg:voicemail-r",
	});
}

export default Component;
