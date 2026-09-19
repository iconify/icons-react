import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/er099gbue.css';
import '../../css/t/t495kuugu.css';
import '../../css/o/o2_grjbvi.css';
import '../../css/p/pssbcwbsq.css';
import '../../css/m/mj6v77bru.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="er099gbue"/><path class="t495kuugu"/><circle class="o2_grjbvi"/><path class="pssbcwbsq"/><path class="mj6v77bru"/></g>`,
		"fallback": "circle-flags:us-mp",
	});
}

export default Component;
