import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z73ncbczk.css';

const viewBox = {"width":610,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z73ncbczk"/>`,
		"fallback": "il:user",
	});
}

export default Component;
