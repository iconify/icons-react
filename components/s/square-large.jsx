import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1b1yq60o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1b1yq60o"/>`,
		"fallback": "healthicons:square-large",
	});
}

export default Component;
