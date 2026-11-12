import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsmli1cfn.css';
import '../../css/x/xfegddcoa.css';
import '../../css/u/u5r3t04hl.css';
import '../../css/b/berg0zbjr.css';
import '../../css/f/f49rs-fos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nsmli1cfn"/><path class="xfegddcoa"/><path class="u5r3t04hl"/><path class="berg0zbjr"/><path class="f49rs-fos"/>`,
		"fallback": "selfhst:tiny-tiny-rss",
	});
}

export default Component;
