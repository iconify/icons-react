import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kby68xphz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kby68xphz"/>`,
		"fallback": "devicon-plain:svgo-wordmark",
	});
}

export default Component;
