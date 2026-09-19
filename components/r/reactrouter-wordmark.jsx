import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v40o2_bot.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v40o2_bot"/>`,
		"fallback": "devicon-plain:reactrouter-wordmark",
	});
}

export default Component;
