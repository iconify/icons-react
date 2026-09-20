import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iekmybbsr.css';
import '../../css/q/qhzr4ibtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iekmybbsr"/><path class="qhzr4ibtk"/></g>`,
		"fallback": "streamline-sharp:medical-search-diagnosis",
	});
}

export default Component;
