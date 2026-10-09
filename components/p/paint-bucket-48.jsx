import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrkr6bc-w.css';
import '../../css/x/x05r09_kp.css';
import '../../css/z/zmroq2b4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrkr6bc-w"/><path class="x05r09_kp"/><path class="zmroq2b4k"/>`,
		"fallback": "energy-icons:paint-bucket-48",
	});
}

export default Component;
