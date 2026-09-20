import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeaf2cblk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeaf2cblk"/>`,
		"fallback": "streamline:travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking",
	});
}

export default Component;
