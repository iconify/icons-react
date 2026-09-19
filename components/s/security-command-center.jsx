import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k188_sbpi.css';
import '../../css/f/f7bma5brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k188_sbpi"/><circle class="f7bma5brt"/>`,
		"fallback": "gcp:security-command-center",
	});
}

export default Component;
