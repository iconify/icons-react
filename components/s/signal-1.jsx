import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np0tqyb7w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np0tqyb7w"/>`,
		"fallback": "glyphs:signal-1",
	});
}

export default Component;
