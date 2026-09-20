import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2azsmb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2azsmb_g"/>`,
		"fallback": "mynaui:panel-left-open-solid",
	});
}

export default Component;
