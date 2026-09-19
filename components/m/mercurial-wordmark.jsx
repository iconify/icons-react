import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32f_itun.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32f_itun"/>`,
		"fallback": "devicon-plain:mercurial-wordmark",
	});
}

export default Component;
