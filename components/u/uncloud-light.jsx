import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drvk6ud3k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drvk6ud3k"/>`,
		"fallback": "selfhst:uncloud-light",
	});
}

export default Component;
