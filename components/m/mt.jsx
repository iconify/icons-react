import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zfr_yb1qg.css';
import '../../css/c/cyf5a0bja.css';
import '../../css/k/ko1gqibed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zfr_yb1qg"/><path class="cyf5a0bja"/><path class="ko1gqibed"/></g>`,
		"fallback": "circle-flags:mt",
	});
}

export default Component;
