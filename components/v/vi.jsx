import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/k/ke8792blf.css';
import '../../css/l/lmjdh1bkf.css';
import '../../css/a/awmhbrbhe.css';
import '../../css/z/zlsft4bna.css';
import '../../css/j/jzur5qbrg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mm_wv7bbg"/><path class="ke8792blf"/><path class="lmjdh1bkf"/><path class="awmhbrbhe"/><path class="zlsft4bna"/><path class="jzur5qbrg"/></g>`,
		"fallback": "circle-flags:vi",
	});
}

export default Component;
