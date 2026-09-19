import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fu68vabvx.css';
import '../../css/n/noo2m29ib.css';
import '../../css/b/b2n3vku2e.css';
import '../../css/v/vnfj97bbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="fu68vabvx"/><path class="noo2m29ib"/><path class="b2n3vku2e"/><path class="vnfj97bbi"/></g>`,
		"fallback": "circle-flags:lang-kr",
	});
}

export default Component;
