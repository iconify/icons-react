import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j29qogbvy.css';
import '../../css/v/vqdqihuwl.css';
import '../../css/i/i7s2upniq.css';
import '../../css/l/lgsipkbuk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="j29qogbvy"/><path class="vqdqihuwl"/><path class="i7s2upniq"/><path class="lgsipkbuk"/></g>`,
		"fallback": "circle-flags:my",
	});
}

export default Component;
