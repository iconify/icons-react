import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbdr5abve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbdr5abve"/>`,
		"fallback": "entypo-social:tumblr",
	});
}

export default Component;
