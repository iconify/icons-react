import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze4n_9xuu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze4n_9xuu"/>`,
		"fallback": "glyphs:snooze-bold",
	});
}

export default Component;
