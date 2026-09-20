import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lek174pux.css';
import '../../css/i/i8w0uiblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lek174pux"/><path class="i8w0uiblg"/></g>`,
		"fallback": "streamline-ultimate:modern-tv-4-k",
	});
}

export default Component;
