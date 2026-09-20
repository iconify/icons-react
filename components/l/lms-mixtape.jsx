import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj9--rywt.css';
import '../../css/r/rr9a01bpl.css';
import '../../css/d/dz4yw6hux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj9--rywt"/><path class="rr9a01bpl"/><path class="dz4yw6hux"/>`,
		"fallback": "selfhst:lms-mixtape",
	});
}

export default Component;
