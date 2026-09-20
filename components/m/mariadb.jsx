import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6suppbvh.css';
import '../../css/j/jn736qsgz.css';
import '../../css/h/hqfelibkn.css';

const viewBox = {"width":256,"height":170};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6suppbvh"/><path class="jn736qsgz"/><path class="hqfelibkn"/>`,
		"fallback": "thesvg-color:mariadb",
	});
}

export default Component;
