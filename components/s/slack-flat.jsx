import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pqt_ojbak.css';
import '../../css/k/km9f5p4cv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pqt_ojbak"/><path class="km9f5p4cv"/></g>`,
		"fallback": "streamline-color:slack-flat",
	});
}

export default Component;
