import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp2-434cc.css';
import '../../css/m/mzibl9poh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp2-434cc"/><path class="mzibl9poh"/>`,
		"fallback": "ion:open",
	});
}

export default Component;
