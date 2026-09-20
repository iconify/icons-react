import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fewt7dbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fewt7dbrf"/>`,
		"fallback": "simple-icons:metrodemadrid",
	});
}

export default Component;
