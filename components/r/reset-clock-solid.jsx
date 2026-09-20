import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx03hvb7d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zx03hvb7d"/>`,
		"fallback": "streamline-plump:reset-clock-solid",
	});
}

export default Component;
