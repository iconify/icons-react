import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmjyyrb7s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmjyyrb7s"/>`,
		"fallback": "streamline:interface-edit-magnet-design-magnet-snap-supplies-to-tool",
	});
}

export default Component;
