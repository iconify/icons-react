import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr6nm9vlo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr6nm9vlo"/>`,
		"fallback": "devicon-plain:phpstorm-wordmark",
	});
}

export default Component;
