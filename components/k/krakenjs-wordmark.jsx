import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugqf5ebaz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugqf5ebaz"/>`,
		"fallback": "devicon-plain:krakenjs-wordmark",
	});
}

export default Component;
