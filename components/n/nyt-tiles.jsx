import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8hgju72p.css';
import '../../css/u/u9y__jw4b.css';
import '../../css/z/zujjfbcsh.css';
import '../../css/x/xbfqloslf.css';
import '../../css/v/v3vlycc2h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8hgju72p"/><path class="u9y__jw4b"/><path class="zujjfbcsh"/><path class="xbfqloslf"/><path class="v3vlycc2h"/>`,
		"fallback": "selfhst:nyt-tiles",
	});
}

export default Component;
