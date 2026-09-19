import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq_mpnbfi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq_mpnbfi"/>`,
		"fallback": "bi:signpost-2",
	});
}

export default Component;
