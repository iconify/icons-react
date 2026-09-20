import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmme1dbbu.css';
import '../../css/z/zju01gbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmme1dbbu"/><path class="zju01gbvr"/>`,
		"fallback": "stash:last-updates-light",
	});
}

export default Component;
