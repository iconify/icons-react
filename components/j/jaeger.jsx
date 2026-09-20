import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb-u1wi3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb-u1wi3g"/>`,
		"fallback": "simple-icons:jaeger",
	});
}

export default Component;
