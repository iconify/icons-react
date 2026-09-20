import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrvr5sfgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrvr5sfgt"/>`,
		"fallback": "selfhst:minio-dark",
	});
}

export default Component;
