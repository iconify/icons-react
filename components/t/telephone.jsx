import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2t_mpb7s.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2t_mpb7s"/>`,
		"fallback": "formkit:telephone",
	});
}

export default Component;
