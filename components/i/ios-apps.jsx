import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6b0lkikv.css';
import '../../css/i/ixx3zz-eq.css';
import '../../css/m/m1ue-3z0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6b0lkikv"/><path class="ixx3zz-eq"/><path class="m1ue-3z0j"/>`,
		"fallback": "ion:ios-apps",
	});
}

export default Component;
