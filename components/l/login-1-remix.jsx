import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b39mnwq1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b39mnwq1h"/>`,
		"fallback": "streamline-plump:login-1-remix",
	});
}

export default Component;
