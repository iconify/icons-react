import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d98txhb5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d98txhb5y"/>`,
		"fallback": "streamline-plump:lens-solid",
	});
}

export default Component;
