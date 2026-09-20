import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdzggabux.css';
import '../../css/y/y9rqo7u8d.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sdzggabux"/><path class="y9rqo7u8d"/>`,
		"fallback": "lineicons:text-format",
	});
}

export default Component;
