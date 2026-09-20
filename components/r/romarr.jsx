import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3j8x2vl.css';
import '../../css/s/sog-c-_ef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3j8x2vl"/><path class="sog-c-_ef"/>`,
		"fallback": "selfhst:romarr",
	});
}

export default Component;
