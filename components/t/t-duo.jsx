import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liqwdbc2v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liqwdbc2v"/>`,
		"fallback": "glyphs:t-duo",
	});
}

export default Component;
