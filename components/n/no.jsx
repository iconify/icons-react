import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u7oepjbfn.css';
import '../../css/k/k4nns9bme.css';
import '../../css/c/crjv6y_du.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="u7oepjbfn"/><path class="k4nns9bme"/><path class="crjv6y_du"/></g>`,
		"fallback": "circle-flags:no",
	});
}

export default Component;
