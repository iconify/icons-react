import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3c-jwbrr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3c-jwbrr"/>`,
		"fallback": "entypo-social:pinterest-with-circle",
	});
}

export default Component;
