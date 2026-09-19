import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/goduvi7zr.css';
import '../../css/i/ithb3rolp.css';
import '../../css/o/oiv-bubpj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="goduvi7zr"/><path class="ithb3rolp"/><path class="oiv-bubpj"/></g>`,
		"fallback": "circle-flags:lang-fo",
	});
}

export default Component;
