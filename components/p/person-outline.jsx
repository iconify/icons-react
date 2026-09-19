import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq9psoxhe.css';
import '../../css/u/uzllidbwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq9psoxhe"/><path class="uzllidbwl"/>`,
		"fallback": "famicons:person-outline",
	});
}

export default Component;
