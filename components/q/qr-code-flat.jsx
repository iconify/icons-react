import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fkdpgibcv.css';
import '../../css/e/expgq0b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fkdpgibcv"/><path class="expgq0b2m"/></g>`,
		"fallback": "streamline-sharp-color:qr-code-flat",
	});
}

export default Component;
