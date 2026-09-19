import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deso3sbgd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deso3sbgd"/>`,
		"fallback": "devicon:spring-wordmark",
	});
}

export default Component;
