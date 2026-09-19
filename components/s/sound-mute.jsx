import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8stoqb6v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8stoqb6v"/>`,
		"fallback": "entypo:sound-mute",
	});
}

export default Component;
