import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrbh9lbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrbh9lbqc"/>`,
		"fallback": "cbi:ivi-tv",
	});
}

export default Component;
