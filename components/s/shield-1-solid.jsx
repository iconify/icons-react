import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b146bit4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b146bit4u"/>`,
		"fallback": "streamline-plump:shield-1-solid",
	});
}

export default Component;
