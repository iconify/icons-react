import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgwpwkbxm.css';
import '../../css/l/lz5trxqpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgwpwkbxm"/><path class="lz5trxqpe"/>`,
		"fallback": "famicons:language-outline",
	});
}

export default Component;
