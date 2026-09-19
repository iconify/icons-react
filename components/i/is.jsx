import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w63igbb1a.css';
import '../../css/k/k4nns9bme.css';
import '../../css/o/oiv-bubpj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="w63igbb1a"/><path class="k4nns9bme"/><path class="oiv-bubpj"/></g>`,
		"fallback": "circle-flags:is",
	});
}

export default Component;
