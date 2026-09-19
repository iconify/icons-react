import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j29qogbvy.css';
import '../../css/v/vqdqihuwl.css';
import '../../css/i/i7s2upniq.css';
import '../../css/q/qjxdwi-8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="j29qogbvy"/><path class="vqdqihuwl"/><path class="i7s2upniq"/><path class="qjxdwi-8i"/></g>`,
		"fallback": "circle-flags:us-um",
	});
}

export default Component;
