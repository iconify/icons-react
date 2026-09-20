import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlzd_xg5i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlzd_xg5i"/>`,
		"fallback": "streamline:music-equalizer",
	});
}

export default Component;
