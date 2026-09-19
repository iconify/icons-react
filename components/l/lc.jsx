import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/er099gbue.css';
import '../../css/m/mrskkxubn.css';
import '../../css/x/xv8b2m54a.css';
import '../../css/w/wjxz8snel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="er099gbue"/><path class="mrskkxubn"/><path class="xv8b2m54a"/><path class="wjxz8snel"/></g>`,
		"fallback": "circle-flags:lc",
	});
}

export default Component;
