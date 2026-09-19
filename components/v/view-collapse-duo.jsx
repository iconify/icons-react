import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr_lmabvd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr_lmabvd"/>`,
		"fallback": "glyphs:view-collapse-duo",
	});
}

export default Component;
