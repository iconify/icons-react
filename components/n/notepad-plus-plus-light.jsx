import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6a_bmqya.css';
import '../../css/r/r5ot870ug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6a_bmqya"/><path class="r5ot870ug"/>`,
		"fallback": "selfhst:notepad-plus-plus-light",
	});
}

export default Component;
