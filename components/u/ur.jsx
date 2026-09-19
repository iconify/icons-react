import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mf-5hnb6c.css';
import '../../css/t/tlgsa5b8h.css';
import '../../css/n/nm-upaclw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsUr0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsUr0)"><path class="mf-5hnb6c"/><path class="tlgsa5b8h"/><path class="nm-upaclw"/></g>`,
		"fallback": "circle-flags:ur",
	});
}

export default Component;
