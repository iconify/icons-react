import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfcmei0vg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfcmei0vg"/>`,
		"fallback": "entypo:landline",
	});
}

export default Component;
