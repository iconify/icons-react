import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl7wdwbyq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl7wdwbyq"/>`,
		"fallback": "pinhead:person-cricket-batting-at-cricket-ball",
	});
}

export default Component;
