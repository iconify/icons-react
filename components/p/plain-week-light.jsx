import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2i8szb4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2i8szb4e"/>`,
		"fallback": "selfhst:plain-week-light",
	});
}

export default Component;
