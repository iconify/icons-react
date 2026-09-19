import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eje_24crj.css';
import '../../css/e/e35vx9b8n.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eje_24crj"/><path class="e35vx9b8n"/><path class="x8r3bo3uc"/>`,
		"fallback": "carbon:kubernetes-control-plane-node",
	});
}

export default Component;
