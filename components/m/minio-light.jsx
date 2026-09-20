import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpb3pvb3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpb3pvb3s"/>`,
		"fallback": "selfhst:minio-light",
	});
}

export default Component;
