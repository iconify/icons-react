import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-vp84b5b.css';
import '../../css/j/jkrx8ppgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-vp84b5b"/><path class="jkrx8ppgg"/>`,
		"fallback": "streamline-ultimate:laptop-clock-bold",
	});
}

export default Component;
