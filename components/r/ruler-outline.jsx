import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kghq_fn3a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kghq_fn3a"/>`,
		"fallback": "glyphs:ruler-outline",
	});
}

export default Component;
