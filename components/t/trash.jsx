import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9yj-ut0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9yj-ut0a"/>`,
		"fallback": "entypo:trash",
	});
}

export default Component;
