import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/ywlqk53zr.css';
import '../../css/q/qbe1mg3cf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ywlqk53zr"/><circle class="qbe1mg3cf"/></g>`,
		"fallback": "circle-flags:lang-bn",
	});
}

export default Component;
