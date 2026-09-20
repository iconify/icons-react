import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x74im5bbe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x74im5bbe"/>`,
		"fallback": "streamline-pixel:logo-whatapp",
	});
}

export default Component;
