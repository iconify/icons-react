import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwcqdy00f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwcqdy00f"/>`,
		"fallback": "icon-park-solid:tool",
	});
}

export default Component;
