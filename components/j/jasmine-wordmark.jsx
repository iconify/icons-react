import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy3uhsson.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy3uhsson"/>`,
		"fallback": "devicon:jasmine-wordmark",
	});
}

export default Component;
