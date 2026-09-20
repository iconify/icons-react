import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n550um41m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n550um41m"/>`,
		"fallback": "streamline-plump:one-handed-holding-tablet-handheld-solid",
	});
}

export default Component;
