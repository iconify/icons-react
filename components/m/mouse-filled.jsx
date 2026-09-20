import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy2i2x7fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy2i2x7fu"/>`,
		"fallback": "reicon:mouse-filled",
	});
}

export default Component;
