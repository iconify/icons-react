import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1x2ahbep.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1x2ahbep"/>`,
		"fallback": "streamline-plump:pen-tool-solid",
	});
}

export default Component;
