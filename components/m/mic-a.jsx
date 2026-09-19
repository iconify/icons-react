import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-lg0wb-p.css';
import '../../css/w/w7cn_ur_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-lg0wb-p"/><path class="w7cn_ur_a"/>`,
		"fallback": "ion:mic-a",
	});
}

export default Component;
