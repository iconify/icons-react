import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm9_89bsm.css';
import '../../css/z/z6-pcfb-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm9_89bsm"/><path class="z6-pcfb-f"/>`,
		"fallback": "selfhst:nextcloud-mail-dark",
	});
}

export default Component;
