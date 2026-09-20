import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5maixbua.css';
import '../../css/b/bfq0sui_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5maixbua"/><path class="bfq0sui_z"/>`,
		"fallback": "mage:premier-pro",
	});
}

export default Component;
