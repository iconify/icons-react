import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz7oazmku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz7oazmku"/>`,
		"fallback": "akar-icons:vr-ar",
	});
}

export default Component;
