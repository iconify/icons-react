import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp6hm53bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tp6hm53bn"/>`,
		"fallback": "thesvg-color:siliconcloud-siliconflow",
	});
}

export default Component;
