import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joapl9b2a.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joapl9b2a"/>`,
		"fallback": "memory:music-note",
	});
}

export default Component;
