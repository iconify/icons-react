import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/i/i61-5eu8p.css';
import '../../css/k/kq4m03ben.css';
import '../../css/f/fihkqhbur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="i61-5eu8p"/><path class="kq4m03ben"/><path class="fihkqhbur"/></g>`,
		"fallback": "streamline-flex-color:spiral-shape",
	});
}

export default Component;
