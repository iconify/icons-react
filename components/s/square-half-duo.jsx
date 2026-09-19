import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3r2cj34a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3r2cj34a"/>`,
		"fallback": "glyphs:square-half-duo",
	});
}

export default Component;
