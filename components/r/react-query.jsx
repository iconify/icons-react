import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8zkctbrn.css';
import '../../css/b/bru00mf_u.css';
import '../../css/o/o2czk5b_p.css';
import '../../css/j/j14ip5bex.css';

const viewBox = {"width":256,"height":230};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8zkctbrn"/><path class="bru00mf_u"/><path class="o2czk5b_p"/><path class="j14ip5bex"/>`,
		"fallback": "thesvg-color:react-query",
	});
}

export default Component;
