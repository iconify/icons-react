import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdx8_s66d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdx8_s66d"/>`,
		"fallback": "glyphs-poly:sort",
	});
}

export default Component;
