import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diha6obbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="diha6obbz"/>`,
		"fallback": "streamline-plump:warning-diamond-solid",
	});
}

export default Component;
