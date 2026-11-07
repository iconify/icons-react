import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw0ke5bhk.css';
import '../../css/f/f8-fppcwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bw0ke5bhk"/><path class="f8-fppcwy"/>`,
		"fallback": "solar:repeat-one-bold-duotone",
	});
}

export default Component;
