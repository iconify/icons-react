import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a423-p5qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a423-p5qq"/>`,
		"fallback": "reicon:music-note2-filled",
	});
}

export default Component;
