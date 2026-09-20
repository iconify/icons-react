import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh7i4nfjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh7i4nfjl"/>`,
		"fallback": "tabler:number-59-small",
	});
}

export default Component;
