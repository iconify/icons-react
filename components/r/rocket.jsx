import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3wq8n-yv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3wq8n-yv"/>`,
		"fallback": "dinkie-icons:rocket",
	});
}

export default Component;
