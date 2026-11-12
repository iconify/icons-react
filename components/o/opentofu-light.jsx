import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgim16_7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgim16_7z"/>`,
		"fallback": "selfhst:opentofu-light",
	});
}

export default Component;
