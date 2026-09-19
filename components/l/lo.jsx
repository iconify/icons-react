import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/ksy1gcbdc.css';
import '../../css/m/m-eozcb5y.css';
import '../../css/w/w75vgjb0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsLo0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsLo0)"><path class="ksy1gcbdc"/><path class="m-eozcb5y"/><circle class="w75vgjb0j"/></g>`,
		"fallback": "circle-flags:lo",
	});
}

export default Component;
