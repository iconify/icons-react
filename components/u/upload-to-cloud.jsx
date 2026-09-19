import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg8v1f0hi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg8v1f0hi"/>`,
		"fallback": "entypo:upload-to-cloud",
	});
}

export default Component;
