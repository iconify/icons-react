import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv72_cb6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jv72_cb6u"/>`,
		"fallback": "streamline-plump:paint-bucket-remix",
	});
}

export default Component;
