import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhkq8cbdm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhkq8cbdm"/>`,
		"fallback": "pinhead:pixel-gasoline-pump",
	});
}

export default Component;
