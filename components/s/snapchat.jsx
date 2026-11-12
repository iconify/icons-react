import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0im_gbxt.css';
import '../../css/t/t1ca65brz.css';
import '../../css/t/tw6980btg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0im_gbxt"/><path class="t1ca65brz"/><path class="tw6980btg"/>`,
		"fallback": "selfhst:snapchat",
	});
}

export default Component;
