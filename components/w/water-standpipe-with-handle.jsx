import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr54odb-n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr54odb-n"/>`,
		"fallback": "pinhead:water-standpipe-with-handle",
	});
}

export default Component;
