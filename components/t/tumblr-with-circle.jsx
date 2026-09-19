import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlm9gfljz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlm9gfljz"/>`,
		"fallback": "entypo-social:tumblr-with-circle",
	});
}

export default Component;
