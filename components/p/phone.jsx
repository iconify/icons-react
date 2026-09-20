import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seqji0d1d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seqji0d1d"/>`,
		"fallback": "rivet-icons:phone",
	});
}

export default Component;
