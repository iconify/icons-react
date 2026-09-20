import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knsk67hid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="knsk67hid"/>`,
		"fallback": "streamline-plump:sign-at-solid",
	});
}

export default Component;
