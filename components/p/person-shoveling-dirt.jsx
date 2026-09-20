import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzsz6cbgy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzsz6cbgy"/>`,
		"fallback": "pinhead:person-shoveling-dirt",
	});
}

export default Component;
