import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjio485oq.css';
import '../../css/b/bfmu8u6wq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjio485oq"/><path class="bfmu8u6wq"/>`,
		"fallback": "selfhst:nakama-dark",
	});
}

export default Component;
