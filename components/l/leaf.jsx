import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3wypyb5u.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3wypyb5u"/>`,
		"fallback": "ps:leaf",
	});
}

export default Component;
