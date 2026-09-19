import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-1ecmbtf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-1ecmbtf"/>`,
		"fallback": "devicon-plain:ruby-wordmark",
	});
}

export default Component;
