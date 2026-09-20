import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruqy2nb-z.css';
import '../../css/y/yg1-m40zm.css';
import '../../css/s/s8rs66b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruqy2nb-z"/><path class="yg1-m40zm"/><path class="s8rs66b6c"/>`,
		"fallback": "streamline-ultimate:modern-music-dj-bold",
	});
}

export default Component;
