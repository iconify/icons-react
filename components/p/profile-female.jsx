import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reejdb5eg.css';

const viewBox = {"width":36,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reejdb5eg"/>`,
		"fallback": "et:profile-female",
	});
}

export default Component;
