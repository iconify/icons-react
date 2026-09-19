import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-_hd0b2c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-_hd0b2c"/>`,
		"fallback": "entypo-social:mixi",
	});
}

export default Component;
