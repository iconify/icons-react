import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/t/tznoqhb6c.css';
import '../../css/c/cxq4kfq9u.css';
import '../../css/p/pmhiyvfve.css';
import '../../css/e/ehimqb6hc.css';
import '../../css/w/wl1q5kwyx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="tznoqhb6c"/><path class="cxq4kfq9u"/><path class="pmhiyvfve"/><path class="ehimqb6hc"/><path class="wl1q5kwyx"/></g>`,
		"fallback": "circle-flags:tf",
	});
}

export default Component;
