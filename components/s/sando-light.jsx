import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo7956bee.css';
import '../../css/f/fq1o6q5xj.css';
import '../../css/j/jq1xa4bul.css';
import '../../css/e/e_r59bb4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo7956bee"/><path class="fq1o6q5xj"/><path class="jq1xa4bul"/><path class="e_r59bb4i"/>`,
		"fallback": "selfhst:sando-light",
	});
}

export default Component;
