import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prmy9wtgl.css';
import '../../css/t/t8vej38_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prmy9wtgl"/><path class="t8vej38_v"/>`,
		"fallback": "selfhst:senlo-light",
	});
}

export default Component;
