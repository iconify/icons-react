import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvj7pvbyd.css';

const viewBox = {"width":457,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvj7pvbyd"/>`,
		"fallback": "file-icons:velocity",
	});
}

export default Component;
