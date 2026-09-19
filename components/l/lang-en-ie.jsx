import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/avqd-b9ee.css';
import '../../css/j/jmch7xe0g.css';
import '../../css/p/peldanb3k.css';
import '../../css/e/eo114u_wk.css';
import '../../css/e/eec2tedcw.css';
import '../../css/y/yvjv1pirb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="avqd-b9ee"/><path class="jmch7xe0g"/><path class="peldanb3k"/><path class="eo114u_wk"/><path class="eec2tedcw"/><path class="yvjv1pirb"/></g>`,
		"fallback": "circle-flags:lang-en-ie",
	});
}

export default Component;
