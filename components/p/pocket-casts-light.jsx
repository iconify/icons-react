import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3ls1h_8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3ls1h_8b"/>`,
		"fallback": "selfhst:pocket-casts-light",
	});
}

export default Component;
