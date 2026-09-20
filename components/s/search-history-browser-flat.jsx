import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdflqhb3g.css';
import '../../css/r/r538bb5wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdflqhb3g"/><path clip-rule="evenodd" class="r538bb5wk"/></g>`,
		"fallback": "streamline-sharp-color:search-history-browser-flat",
	});
}

export default Component;
