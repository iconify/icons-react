import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjodo-bjv.css';
import '../../css/e/ez5ds-_fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjodo-bjv"/><path class="ez5ds-_fw"/>`,
		"fallback": "mage:search-square-fill",
	});
}

export default Component;
