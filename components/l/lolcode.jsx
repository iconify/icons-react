import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo3o-8b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo3o-8b1x"/>`,
		"fallback": "material-icon-theme:lolcode",
	});
}

export default Component;
