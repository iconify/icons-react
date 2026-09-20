import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwr8mbc3j.css';
import '../../css/s/sl0sqdbfa.css';
import '../../css/w/w5mozcc8a.css';
import '../../css/o/om93iibmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwr8mbc3j"/><path class="sl0sqdbfa"/><path class="w5mozcc8a"/><path class="om93iibmb"/>`,
		"fallback": "selfhst:seedsync",
	});
}

export default Component;
