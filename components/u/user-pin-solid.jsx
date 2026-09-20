import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tng3gzelg.css';
import '../../css/h/hzpmfc_wi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tng3gzelg"/><path class="hzpmfc_wi"/>`,
		"fallback": "streamline-plump:user-pin-solid",
	});
}

export default Component;
