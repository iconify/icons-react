import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ady9k8bfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ady9k8bfr"/>`,
		"fallback": "entypo-social:linkedin",
	});
}

export default Component;
