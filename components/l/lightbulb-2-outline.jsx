import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr8nz_b2d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tr8nz_b2d"/>`,
		"fallback": "glyphs:lightbulb-2-outline",
	});
}

export default Component;
