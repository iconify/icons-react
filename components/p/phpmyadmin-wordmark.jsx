import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1swtpa_j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1swtpa_j"/>`,
		"fallback": "devicon-plain:phpmyadmin-wordmark",
	});
}

export default Component;
