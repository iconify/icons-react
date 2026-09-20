import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk-jk3b-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk-jk3b-d"/>`,
		"fallback": "streamline-plump:sign-at",
	});
}

export default Component;
