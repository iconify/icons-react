import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzc1br60k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzc1br60k"/>`,
		"fallback": "cbi:signe",
	});
}

export default Component;
