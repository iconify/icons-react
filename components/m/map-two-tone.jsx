import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/ju0izd6fm.css';
import '../../css/q/qmupbsqkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ju0izd6fm"/><path class="qmupbsqkn"/></g>`,
		"fallback": "keyline-icons:map-two-tone",
	});
}

export default Component;
