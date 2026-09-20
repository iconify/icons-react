import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-fx9vqjt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-fx9vqjt"/>`,
		"fallback": "pinhead:person-carrying-ski-and-ski-poles",
	});
}

export default Component;
