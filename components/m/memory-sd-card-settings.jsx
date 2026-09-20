import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7j3wsbkq.css';
import '../../css/w/wwvgql0gp.css';
import '../../css/f/fup7zrb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7j3wsbkq"/><path class="wwvgql0gp"/><path class="fup7zrb6t"/>`,
		"fallback": "streamline-freehand:memory-sd-card-settings",
	});
}

export default Component;
