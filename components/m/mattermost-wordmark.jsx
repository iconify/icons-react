import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-g93_t9b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-g93_t9b"/>`,
		"fallback": "devicon:mattermost-wordmark",
	});
}

export default Component;
