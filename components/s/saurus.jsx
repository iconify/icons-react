import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gndumxe4o.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gndumxe4o"/>`,
		"fallback": "whh:saurus",
	});
}

export default Component;
