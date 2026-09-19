import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r-jxe9bpv.css';
import '../../css/o/omnpcg9gc.css';
import '../../css/z/zjbgnh96p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgFAqpCEZ"><g class="v3_i3wktz"><path class="r-jxe9bpv"/><path class="omnpcg9gc"/><path class="zjbgnh96p"/></g></mask></defs><path mask="url(#SVGgFAqpCEZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:invert-camera",
	});
}

export default Component;
