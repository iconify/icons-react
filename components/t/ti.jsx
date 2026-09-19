import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zft_32b5b.css';
import '../../css/d/dx0ia8cmc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsTi0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsTi0)"><path class="zft_32b5b"/><path class="dx0ia8cmc"/></g>`,
		"fallback": "circle-flags:ti",
	});
}

export default Component;
