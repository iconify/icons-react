import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehtg9qbsc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehtg9qbsc"/>`,
		"fallback": "dinkie-icons:twitter-alt",
	});
}

export default Component;
