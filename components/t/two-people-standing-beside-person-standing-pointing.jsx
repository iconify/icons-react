import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvw6ufsvz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvw6ufsvz"/>`,
		"fallback": "pinhead:two-people-standing-beside-person-standing-pointing",
	});
}

export default Component;
