import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/meky6tfum.css';
import '../../css/s/s9i0spb8u.css';
import '../../css/h/hudil7bpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="meky6tfum"/><path class="s9i0spb8u"/><path class="hudil7bpc"/></g>`,
		"fallback": "circle-flags:lang-ee",
	});
}

export default Component;
