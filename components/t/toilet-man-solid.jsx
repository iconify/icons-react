import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un9t5sbpn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="un9t5sbpn"/>`,
		"fallback": "streamline-plump:toilet-man-solid",
	});
}

export default Component;
