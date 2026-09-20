import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lvncho9ik.css';
import '../../css/e/ecwwq9bnp.css';
import '../../css/s/scrh2muys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lvncho9ik"/><path class="ecwwq9bnp"/><path class="scrh2muys"/></g>`,
		"fallback": "streamline-freehand:modern-payment-desktop-transaction",
	});
}

export default Component;
