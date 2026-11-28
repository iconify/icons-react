import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjwd8jtei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjwd8jtei"/>`,
		"fallback": "noviair-light:smart-home-x",
	});
}

export default Component;
