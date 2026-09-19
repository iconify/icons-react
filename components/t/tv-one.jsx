import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/f511r1bqe.css';
import '../../css/p/pk88opbyp.css';
import '../../css/e/e3js6e8az.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSlaJve4p"><g class="v3_i3wktz"><path class="f511r1bqe"/><path class="pk88opbyp"/><path class="e3js6e8az"/></g></mask></defs><path mask="url(#SVGSlaJve4p)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tv-one",
	});
}

export default Component;
