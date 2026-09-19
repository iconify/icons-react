import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocgp66bez.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocgp66bez"/>`,
		"fallback": "catppuccin:nest-filter",
	});
}

export default Component;
