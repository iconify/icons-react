import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kuu8pebak.css';
import '../../css/s/sckgjabzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kuu8pebak"/><path class="sckgjabzu"/></g>`,
		"fallback": "streamline-ultimate:performance-money-decrease",
	});
}

export default Component;
