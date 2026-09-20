import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/v10irub5c.css';
import '../../css/j/j1_0s3bib.css';
import '../../css/y/yh8u5h8yq.css';
import '../../css/b/buzxujbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="v10irub5c"/><path class="j1_0s3bib"/><path class="yh8u5h8yq"/><path class="buzxujbpv"/></g>`,
		"fallback": "streamline-sharp-color:sphere-shape",
	});
}

export default Component;
