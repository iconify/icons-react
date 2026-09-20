import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo6epnw-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo6epnw-x"/>`,
		"fallback": "roentgen:vending-candy",
	});
}

export default Component;
