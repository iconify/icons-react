import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vms7zibqn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vms7zibqn"/>`,
		"fallback": "streamline:orientation-landscape-solid",
	});
}

export default Component;
