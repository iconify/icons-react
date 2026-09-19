import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui29b_b6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui29b_b6z"/>`,
		"fallback": "icon-park-outline:sort-three",
	});
}

export default Component;
