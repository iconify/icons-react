import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppi1g2beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppi1g2beh"/>`,
		"fallback": "material-icon-theme:kl",
	});
}

export default Component;
