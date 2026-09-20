import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldhv43wfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ldhv43wfq"/>`,
		"fallback": "streamline-plump:notification-alert-solid",
	});
}

export default Component;
