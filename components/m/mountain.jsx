import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6blx7bhk.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6blx7bhk"/>`,
		"fallback": "si-glyph:mountain",
	});
}

export default Component;
