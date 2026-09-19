import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmw38b5pn.css';
import '../../css/z/zse_r2bij.css';
import '../../css/c/cs-uxhb8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmw38b5pn"/><path class="zse_r2bij"/><circle class="cs-uxhb8w"/>`,
		"fallback": "ion:ios-flashlight",
	});
}

export default Component;
