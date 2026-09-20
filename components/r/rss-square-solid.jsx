import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm528p0go.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fm528p0go"/>`,
		"fallback": "streamline-plump:rss-square-solid",
	});
}

export default Component;
