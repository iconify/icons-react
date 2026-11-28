import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0ap34peq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0ap34peq"/>`,
		"fallback": "noviair:tooth-x",
	});
}

export default Component;
