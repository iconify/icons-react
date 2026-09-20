import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvx1k5bwq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvx1k5bwq"/>`,
		"fallback": "pinhead:pawprint-and-whistle",
	});
}

export default Component;
