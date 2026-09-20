import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trx027wel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trx027wel"/>`,
		"fallback": "thesvg-color:purescript",
	});
}

export default Component;
