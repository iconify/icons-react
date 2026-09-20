import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsmli1cfn.css';
import '../../css/x/xfegddcoa.css';
import '../../css/u/u5r3t04hl.css';
import '../../css/i/i0k6moa8q.css';
import '../../css/g/g9u-te31s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nsmli1cfn"/><path class="xfegddcoa"/><path class="u5r3t04hl"/><path class="i0k6moa8q"/><path class="g9u-te31s"/>`,
		"fallback": "selfhst:tiny-tiny-rss",
	});
}

export default Component;
