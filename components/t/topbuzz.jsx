import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrhbwb1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbrhbwb1e"/>`,
		"fallback": "icon-park-solid:topbuzz",
	});
}

export default Component;
