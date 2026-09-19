import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/h3dghdw4c.css';
import '../../css/e/ej832pbut.css';
import '../../css/e/e0kv8pw_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="h3dghdw4c"/><path class="ej832pbut"/><path class="e0kv8pw_w"/></g>`,
		"fallback": "circle-flags:kh",
	});
}

export default Component;
