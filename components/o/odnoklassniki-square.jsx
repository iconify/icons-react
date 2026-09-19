import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwj_zibxz.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwj_zibxz"/>`,
		"fallback": "fa:odnoklassniki-square",
	});
}

export default Component;
