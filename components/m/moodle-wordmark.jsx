import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b92mj7bnb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b92mj7bnb"/>`,
		"fallback": "devicon-plain:moodle-wordmark",
	});
}

export default Component;
