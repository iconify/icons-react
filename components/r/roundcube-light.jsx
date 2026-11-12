import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc26ied2w.css';
import '../../css/z/zrv1yxb_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc26ied2w"/><path class="zrv1yxb_h"/>`,
		"fallback": "selfhst:roundcube-light",
	});
}

export default Component;
