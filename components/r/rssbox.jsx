import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xofz_hqhq.css';
import '../../css/f/fty-rfbpv.css';
import '../../css/l/lkdhn-3lv.css';
import '../../css/z/zq5hs3bgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xofz_hqhq"/><path class="fty-rfbpv"/><path class="lkdhn-3lv"/><path class="zq5hs3bgd"/>`,
		"fallback": "selfhst:rssbox",
	});
}

export default Component;
