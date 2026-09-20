import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en8iypeyz.css';
import '../../css/q/qgciedcam.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en8iypeyz"/><path clip-rule="evenodd" class="qgciedcam"/>`,
		"fallback": "teenyicons:lock-circle-solid",
	});
}

export default Component;
