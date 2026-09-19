import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6ulv6bdt.css';
import '../../css/k/ku4u7fl3c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6ulv6bdt"/><path class="ku4u7fl3c"/>`,
		"fallback": "devicon:opentelemetry",
	});
}

export default Component;
