import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3ht_0i4f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3ht_0i4f"/>`,
		"fallback": "pullo:send-backward-fill",
	});
}

export default Component;
