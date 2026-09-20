import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9g4-upkk.css';
import '../../css/j/j4n-avbkq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9g4-upkk"/><path class="j4n-avbkq"/>`,
		"fallback": "material-icon-theme:scons-light",
	});
}

export default Component;
