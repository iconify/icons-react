import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbdpl6b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbdpl6b3n"><animateTransform attributeName="transform" attributeType="XML" dur="560ms" from="0,12,12" repeatCount="indefinite" to="360,12,12" type="rotate"/></path>`,
		"fallback": "codex:loader",
	});
}

export default Component;
