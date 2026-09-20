import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk29gcbsq.css';
import '../../css/k/ktus5xkah.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk29gcbsq"/><path clip-rule="evenodd" class="ktus5xkah"/>`,
		"fallback": "teenyicons:pdf-solid",
	});
}

export default Component;
