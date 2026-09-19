import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-pk2evut.css';
import '../../css/m/mxwo3o_cb.css';
import '../../css/v/v01vscs4u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-pk2evut"/><path class="mxwo3o_cb"/><path class="v01vscs4u"/>`,
		"fallback": "ep:office-building",
	});
}

export default Component;
