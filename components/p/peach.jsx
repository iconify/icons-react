import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx9i_ms2t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx9i_ms2t"/>`,
		"fallback": "fluent-emoji-high-contrast:peach",
	});
}

export default Component;
