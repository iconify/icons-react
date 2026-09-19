import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpmse0ykx.css';
import '../../css/c/c77e_usuo.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpmse0ykx"/><path class="c77e_usuo"/>`,
		"fallback": "fontisto:magento",
	});
}

export default Component;
