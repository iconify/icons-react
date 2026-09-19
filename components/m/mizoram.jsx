import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qw1f0bfkg.css';
import '../../css/o/ou1b4gbff.css';
import '../../css/b/br4dn_b2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsMizoram0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsMizoram0)"><path class="qw1f0bfkg"/><path class="ou1b4gbff"/><circle class="br4dn_b2l"/></g>`,
		"fallback": "circle-flags:mizoram",
	});
}

export default Component;
