import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqi1sbb0j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eqi1sbb0j"/>`,
		"fallback": "glyphs:keycap-outline",
	});
}

export default Component;
