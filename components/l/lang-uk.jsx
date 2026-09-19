import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pkqu0b6sw.css';
import '../../css/i/ikatgjnuw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="pkqu0b6sw"/><path class="ikatgjnuw"/></g>`,
		"fallback": "circle-flags:lang-uk",
	});
}

export default Component;
