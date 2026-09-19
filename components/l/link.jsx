import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/m8aomxbbb.css';
import '../../css/z/z9kiv3ory.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="m8aomxbbb"/><path class="z9kiv3ory"/></g>`,
		"fallback": "glyphs-poly:link",
	});
}

export default Component;
