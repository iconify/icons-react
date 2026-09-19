import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7dcahbqk.css';

const viewBox = {"width":19,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7dcahbqk"/>`,
		"fallback": "fontisto:stethoscope",
	});
}

export default Component;
