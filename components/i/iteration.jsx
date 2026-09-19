import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxj7ol8dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxj7ol8dj"/>`,
		"fallback": "grommet-icons:iteration",
	});
}

export default Component;
