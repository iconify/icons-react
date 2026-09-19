import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmyumyv0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmyumyv0d"/>`,
		"fallback": "hugeicons:squircle-dashed",
	});
}

export default Component;
