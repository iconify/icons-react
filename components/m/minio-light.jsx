import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqfdm7snc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqfdm7snc"/>`,
		"fallback": "selfhst:minio-light",
	});
}

export default Component;
