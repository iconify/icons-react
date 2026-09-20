import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4-mns66q.css';
import '../../css/c/c52keb9qe.css';
import '../../css/x/x8znsxq4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4-mns66q"/><path class="c52keb9qe"/><path clip-rule="evenodd" class="x8znsxq4o"/>`,
		"fallback": "solar:trellis-bold-duotone",
	});
}

export default Component;
