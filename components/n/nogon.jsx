import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl5bj2m7i.css';
import '../../css/z/zq22zks8c.css';
import '../../css/j/jz98-fb_u.css';
import '../../css/h/hgpj1lw8u.css';
import '../../css/r/r5m7ms6tg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl5bj2m7i"/><path class="zq22zks8c"/><path class="jz98-fb_u"/><path class="hgpj1lw8u"/><path class="r5m7ms6tg"/>`,
		"fallback": "selfhst:nogon",
	});
}

export default Component;
