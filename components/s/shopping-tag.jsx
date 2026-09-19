import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0t_852bq.css';
import '../../css/l/lihbolbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0t_852bq"/><circle class="lihbolbto"/>`,
		"fallback": "circum:shopping-tag",
	});
}

export default Component;
