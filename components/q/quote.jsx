import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vte_uebsx.css';
import '../../css/s/s21yl5blf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vte_uebsx"/><path class="s21yl5blf"/>`,
		"fallback": "ion:quote",
	});
}

export default Component;
