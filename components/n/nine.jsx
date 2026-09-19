import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-9iiqe2g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-9iiqe2g"/>`,
		"fallback": "glyphs-poly:nine",
	});
}

export default Component;
