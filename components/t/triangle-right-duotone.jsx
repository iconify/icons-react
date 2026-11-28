import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmyx8dbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmyx8dbtg primary"/>`,
		"fallback": "iconaut:triangle-right-duotone",
	});
}

export default Component;
