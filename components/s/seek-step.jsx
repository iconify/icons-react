import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9krj_bts.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9krj_bts"/>`,
		"fallback": "glyphs:seek-step",
	});
}

export default Component;
