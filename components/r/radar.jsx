import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utj8jebkl.css';
import '../../css/t/ty4gwj7hq.css';
import '../../css/o/o9747sblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="utj8jebkl"/><path class="ty4gwj7hq"/><path class="o9747sblf"/></g>`,
		"fallback": "tabler:radar",
	});
}

export default Component;
