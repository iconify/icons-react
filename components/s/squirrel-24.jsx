import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq3i7sb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq3i7sb0u"/>`,
		"fallback": "octicon:squirrel-24",
	});
}

export default Component;
