import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atgd69b9u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atgd69b9u"/>`,
		"fallback": "lsicon:menu-endways-outline",
	});
}

export default Component;
