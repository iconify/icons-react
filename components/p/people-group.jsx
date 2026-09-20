import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2hcgcc2r.css';
import '../../css/m/mwvb097_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2hcgcc2r"/><path class="mwvb097_d"/>`,
		"fallback": "stash:people-group",
	});
}

export default Component;
