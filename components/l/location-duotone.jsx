import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xass45b8v.css';
import '../../css/j/jww6vuirk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xass45b8v"/><path class="jww6vuirk"/>`,
		"fallback": "stash:location-duotone",
	});
}

export default Component;
