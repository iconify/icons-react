import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btxd_x04d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btxd_x04d"/>`,
		"fallback": "game-icons:lyre",
	});
}

export default Component;
