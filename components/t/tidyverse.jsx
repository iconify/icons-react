import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtk__tbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtk__tbdm"/>`,
		"fallback": "thesvg-color:tidyverse",
	});
}

export default Component;
