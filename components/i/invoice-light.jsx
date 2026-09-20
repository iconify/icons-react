import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ijgqb1h.css';
import '../../css/t/tgz0bac_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ijgqb1h"/><path class="tgz0bac_r"/>`,
		"fallback": "stash:invoice-light",
	});
}

export default Component;
