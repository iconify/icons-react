import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev061dfmc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev061dfmc"/>`,
		"fallback": "entypo-social:stumbleupon",
	});
}

export default Component;
