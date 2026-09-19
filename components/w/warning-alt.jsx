import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tetntvipe.css';
import '../../css/w/wczsurb_t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tetntvipe"/><path class="wczsurb_t"/>`,
		"fallback": "carbon:warning-alt",
	});
}

export default Component;
