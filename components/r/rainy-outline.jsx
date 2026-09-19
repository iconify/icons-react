import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppih4zbbb.css';
import '../../css/o/o92kdvbxk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppih4zbbb"/><path class="o92kdvbxk"/>`,
		"fallback": "famicons:rainy-outline",
	});
}

export default Component;
