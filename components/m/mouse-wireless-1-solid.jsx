import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5jmgibkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v5jmgibkj"/>`,
		"fallback": "streamline-plump:mouse-wireless-1-solid",
	});
}

export default Component;
