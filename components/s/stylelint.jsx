import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kic47lbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kic47lbmv"/>`,
		"fallback": "thesvg-color:stylelint",
	});
}

export default Component;
