import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-s9sj87a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-s9sj87a"/>`,
		"fallback": "fluent-emoji-high-contrast:squid",
	});
}

export default Component;
