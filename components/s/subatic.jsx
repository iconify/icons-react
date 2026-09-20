import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7okh1bgg.css';
import '../../css/g/gakqf2bdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7okh1bgg"/><path class="gakqf2bdp"/>`,
		"fallback": "selfhst:subatic",
	});
}

export default Component;
