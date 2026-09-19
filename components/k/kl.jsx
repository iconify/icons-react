import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/i9u83363m.css';
import '../../css/n/nag_kzbmf.css';
import '../../css/y/yhuvbkbie.css';
import '../../css/c/c17uwjbkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsKl0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsKl0)"><path class="i9u83363m"/><path class="nag_kzbmf"/><path class="yhuvbkbie"/><path class="c17uwjbkn"/></g>`,
		"fallback": "circle-flags:kl",
	});
}

export default Component;
