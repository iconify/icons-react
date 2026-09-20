import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh1gm4byw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh1gm4byw"/>`,
		"fallback": "streamline-plump:share-link-solid",
	});
}

export default Component;
