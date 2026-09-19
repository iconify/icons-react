import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkipbq40s.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkipbq40s"/>`,
		"fallback": "si-glyph:person-man",
	});
}

export default Component;
