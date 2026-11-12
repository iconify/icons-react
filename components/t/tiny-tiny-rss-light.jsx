import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0bmt8p7x.css';
import '../../css/c/clu__8tmi.css';
import '../../css/v/v3dm0tfsh.css';
import '../../css/j/jwl4-qprl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0bmt8p7x"/><path class="clu__8tmi"/><path class="v3dm0tfsh"/><path class="jwl4-qprl"/>`,
		"fallback": "selfhst:tiny-tiny-rss-light",
	});
}

export default Component;
