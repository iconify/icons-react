import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5dcexv3p.css';
import '../../css/j/jww6vuirk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5dcexv3p"/><path class="jww6vuirk"/>`,
		"fallback": "stash:user-cog",
	});
}

export default Component;
