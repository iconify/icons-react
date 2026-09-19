import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/ah3rb_p1t.css';
import '../../css/c/cxbcwlbjn.css';
import '../../css/e/esdp5pbjw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ah3rb_p1t"/><path class="cxbcwlbjn"/><path class="esdp5pbjw"/></g>`,
		"fallback": "circle-flags:lang-fy",
	});
}

export default Component;
