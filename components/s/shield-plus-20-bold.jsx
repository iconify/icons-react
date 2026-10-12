import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gglz27bws.css';
import '../../css/b/btfpme1ph.css';
import '../../css/u/udj0ufbcm.css';
import '../../css/v/vn61y3npo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gglz27bws"/><path class="btfpme1ph"/><path class="udj0ufbcm"/><path class="vn61y3npo"/>`,
		"fallback": "energy-icons:shield-plus-20-bold",
	});
}

export default Component;
