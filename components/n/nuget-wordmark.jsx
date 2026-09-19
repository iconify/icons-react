import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc9bt0gfe.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc9bt0gfe"/>`,
		"fallback": "devicon:nuget-wordmark",
	});
}

export default Component;
