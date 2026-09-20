import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_90m36fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_90m36fo"/>`,
		"fallback": "tdesign:play-chart-filled",
	});
}

export default Component;
