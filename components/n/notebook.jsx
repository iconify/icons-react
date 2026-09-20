import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cr491y3zg.css';
import '../../css/q/qt8sk13le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cr491y3zg"/><path class="qt8sk13le"/></g>`,
		"fallback": "streamline-sharp:notebook",
	});
}

export default Component;
