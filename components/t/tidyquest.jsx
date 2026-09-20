import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5twlibpq.css';
import '../../css/d/dkab58b3o.css';
import '../../css/z/zn725acau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5twlibpq"/><path class="dkab58b3o"/><path class="zn725acau"/>`,
		"fallback": "selfhst:tidyquest",
	});
}

export default Component;
