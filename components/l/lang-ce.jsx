import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f_zukwb7p.css';
import '../../css/i/iitlfdb5a.css';
import '../../css/x/xxddg2bhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="f_zukwb7p"/><path class="iitlfdb5a"/><path class="xxddg2bhe"/></g>`,
		"fallback": "circle-flags:lang-ce",
	});
}

export default Component;
