import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buijfg4ca.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buijfg4ca"/>`,
		"fallback": "glyphs:snooze-outline",
	});
}

export default Component;
