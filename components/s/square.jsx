import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iws4iub9t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iws4iub9t"/>`,
		"fallback": "icon-park-solid:square",
	});
}

export default Component;
