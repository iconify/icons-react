import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqmpb4b4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dqmpb4b4z"/>`,
		"fallback": "healthicons:medicine-bottle",
	});
}

export default Component;
