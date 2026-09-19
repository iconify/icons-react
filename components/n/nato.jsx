import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g_iyx94qa.css';
import '../../css/j/j8qr1nblq.css';
import '../../css/g/gyo7hmbnu.css';
import '../../css/g/g_dn4gb3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g_iyx94qa"/><path class="j8qr1nblq"/><path class="gyo7hmbnu"/><path class="g_dn4gb3j"/></g>`,
		"fallback": "circle-flags:nato",
	});
}

export default Component;
