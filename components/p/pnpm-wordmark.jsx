import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz4j5z9qi.css';
import '../../css/g/g878ilbyw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz4j5z9qi"/><path class="g878ilbyw"/>`,
		"fallback": "devicon:pnpm-wordmark",
	});
}

export default Component;
