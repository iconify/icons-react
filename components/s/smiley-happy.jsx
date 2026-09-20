import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-s39obqw.css';
import '../../css/p/pj7apackc.css';
import '../../css/u/ujkr1hb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-s39obqw"/><path class="pj7apackc"/><path class="ujkr1hb8j"/>`,
		"fallback": "streamline-freehand:smiley-happy",
	});
}

export default Component;
