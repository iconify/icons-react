import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt8pu_u7k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt8pu_u7k"/>`,
		"fallback": "glyphs:unlink",
	});
}

export default Component;
