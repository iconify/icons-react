import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-q9d9ndb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-q9d9ndb"/>`,
		"fallback": "thesvg-color:valve",
	});
}

export default Component;
