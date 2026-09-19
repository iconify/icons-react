import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v019dkbhl.css';
import '../../css/b/bdk4lrbrq.css';
import '../../css/g/gz-_93bch.css';
import '../../css/w/wgk3vp1fl.css';
import '../../css/e/e1l6ajbjq.css';
import '../../css/c/cwkghccfp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v019dkbhl"/><path class="bdk4lrbrq"/><path class="gz-_93bch"/><path class="wgk3vp1fl"/><path class="e1l6ajbjq"/><path class="cwkghccfp"/></g>`,
		"fallback": "fluent-emoji-flat:party-popper",
	});
}

export default Component;
