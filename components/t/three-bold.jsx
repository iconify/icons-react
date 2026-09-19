import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acnttdb-g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acnttdb-g"/>`,
		"fallback": "glyphs:three-bold",
	});
}

export default Component;
