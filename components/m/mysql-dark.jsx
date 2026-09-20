import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk3xrrbnq.css';
import '../../css/c/cjo_bouin.css';

const viewBox = {"width":256,"height":252};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk3xrrbnq"/><path class="cjo_bouin"/>`,
		"fallback": "thesvg-color:mysql-dark",
	});
}

export default Component;
