import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0npbyq9r.css';
import '../../css/r/rxc-hlbwa.css';
import '../../css/w/wutugpbrb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0npbyq9r"/><path class="rxc-hlbwa"/><path class="wutugpbrb"/>`,
		"fallback": "fxemoji:russianflag",
	});
}

export default Component;
