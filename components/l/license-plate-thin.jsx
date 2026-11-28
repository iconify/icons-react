import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibi5hccgp.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibi5hccgp"/>`,
		"fallback": "pullo:license-plate-thin",
	});
}

export default Component;
