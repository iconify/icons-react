import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o605f_yot.css';
import '../../css/c/ce7aadsur.css';
import '../../css/w/wczsurb_t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o605f_yot"/><path class="ce7aadsur"/><path class="wczsurb_t"/>`,
		"fallback": "carbon:warning-alt-filled",
	});
}

export default Component;
