import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pq2i8kiiw.css';
import '../../css/x/xs5ohebgj.css';
import '../../css/w/wzs6oic2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="pq2i8kiiw"/><path class="xs5ohebgj"/><path class="wzs6oic2r"/></g>`,
		"fallback": "circle-flags:li",
	});
}

export default Component;
