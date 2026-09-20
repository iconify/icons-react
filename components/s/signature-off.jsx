import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skew6abkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skew6abkz"/>`,
		"fallback": "tabler:signature-off",
	});
}

export default Component;
