import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em7xvwbpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em7xvwbpj"/>`,
		"fallback": "streamline-plump-color:invisible-2-flat",
	});
}

export default Component;
