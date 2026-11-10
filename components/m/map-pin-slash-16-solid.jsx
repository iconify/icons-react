import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9vlsyb1n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f9vlsyb1n"/>`,
		"fallback": "sidekickicons:map-pin-slash-16-solid",
	});
}

export default Component;
