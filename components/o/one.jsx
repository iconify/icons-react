import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh4v3y2lf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh4v3y2lf"/>`,
		"fallback": "icon-park-solid:one",
	});
}

export default Component;
