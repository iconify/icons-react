import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7vvir64i.css';
import '../../css/r/roi1-go0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<clipPath id="SVGWLziubJw"><path class="t7vvir64i"/></clipPath><g clip-path="url(#SVGWLziubJw)"><path class="roi1-go0j"/></g>`,
		"fallback": "gridicons:reader-share",
	});
}

export default Component;
