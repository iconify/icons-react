import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfatbun5p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfatbun5p"/>`,
		"fallback": "si-glyph:load",
	});
}

export default Component;
