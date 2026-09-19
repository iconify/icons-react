import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyyt5hbdn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyyt5hbdn"/>`,
		"fallback": "file-icons:microsoft-powerpoint",
	});
}

export default Component;
