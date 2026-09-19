import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-dwubc5t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-dwubc5t"/>`,
		"fallback": "devicon-plain:lovable-wordmark",
	});
}

export default Component;
