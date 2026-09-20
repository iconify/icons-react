import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1ectnb4k.css';
import '../../css/t/ti-3o5bch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1ectnb4k"/><path class="ti-3o5bch"/>`,
		"fallback": "streamline-plump:mail-notification-solid",
	});
}

export default Component;
