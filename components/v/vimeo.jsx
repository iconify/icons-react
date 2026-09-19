import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buth0fb_n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buth0fb_n"/>`,
		"fallback": "entypo-social:vimeo",
	});
}

export default Component;
