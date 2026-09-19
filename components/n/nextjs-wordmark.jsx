import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su6iesbpu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su6iesbpu"/>`,
		"fallback": "devicon:nextjs-wordmark",
	});
}

export default Component;
