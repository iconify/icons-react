import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/latfuii3y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="latfuii3y"/>`,
		"fallback": "devicon-plain:unraid-wordmark",
	});
}

export default Component;
