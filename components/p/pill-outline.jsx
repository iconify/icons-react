import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_dx56bsm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s_dx56bsm"/>`,
		"fallback": "glyphs:pill-outline",
	});
}

export default Component;
