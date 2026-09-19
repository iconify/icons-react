import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzhrqib3p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzhrqib3p"/>`,
		"fallback": "si-glyph:shield-2",
	});
}

export default Component;
