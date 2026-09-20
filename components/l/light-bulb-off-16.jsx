import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg3jbr79j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fg3jbr79j"/>`,
		"fallback": "qlementine-icons:light-bulb-off-16",
	});
}

export default Component;
