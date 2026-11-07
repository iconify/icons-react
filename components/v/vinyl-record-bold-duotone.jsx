import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b85oo4swx.css';
import '../../css/f/fdq8872og.css';
import '../../css/q/q14qdhbhn.css';
import '../../css/k/kjtd21bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b85oo4swx"/><path class="fdq8872og"/><path class="q14qdhbhn"/><path clip-rule="evenodd" class="kjtd21bxk"/>`,
		"fallback": "solar:vinyl-record-bold-duotone",
	});
}

export default Component;
