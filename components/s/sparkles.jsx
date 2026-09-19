import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzuvhhb6j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzuvhhb6j"/>`,
		"fallback": "glyphs:sparkles",
	});
}

export default Component;
