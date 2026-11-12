import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyi-blxwk.css';
import '../../css/i/iw8xtjb4w.css';
import '../../css/c/c18_ysapx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyi-blxwk"/><path class="iw8xtjb4w"/><path class="c18_ysapx"/>`,
		"fallback": "selfhst:taiga-dark",
	});
}

export default Component;
