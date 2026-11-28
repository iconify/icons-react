import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbd9j875s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbd9j875s"/>`,
		"fallback": "noviair:rocket-check",
	});
}

export default Component;
