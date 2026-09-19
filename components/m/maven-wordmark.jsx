import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou83dy36f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou83dy36f"/>`,
		"fallback": "devicon-plain:maven-wordmark",
	});
}

export default Component;
