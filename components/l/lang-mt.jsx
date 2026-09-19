import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zfr_yb1qg.css';
import '../../css/c/cyf5a0bja.css';
import '../../css/v/vf08bjb8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="zfr_yb1qg"/><path class="cyf5a0bja"/><path class="vf08bjb8r"/></g>`,
		"fallback": "circle-flags:lang-mt",
	});
}

export default Component;
