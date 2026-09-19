import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oly6fdb5g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oly6fdb5g"/>`,
		"fallback": "glyphs-poly:italic",
	});
}

export default Component;
