import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m81bi_bfe.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m81bi_bfe"/>`,
		"fallback": "devicon-plain:opentelemetry-wordmark",
	});
}

export default Component;
