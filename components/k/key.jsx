import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4gi4cv0c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4gi4cv0c"/>`,
		"fallback": "glyphs-poly:key",
	});
}

export default Component;
