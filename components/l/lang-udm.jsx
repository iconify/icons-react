import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/ayrm58b3o.css';
import '../../css/m/mfzbs70ff.css';
import '../../css/n/n4cyhmbkq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ayrm58b3o"/><path class="mfzbs70ff"/><path class="n4cyhmbkq"/></g>`,
		"fallback": "circle-flags:lang-udm",
	});
}

export default Component;
