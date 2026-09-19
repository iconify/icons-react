import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nt4wcrb_f.css';
import '../../css/v/v4dpeibvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="nt4wcrb_f"/><path class="v4dpeibvd"/></g>`,
		"fallback": "icon-park-outline:tent-banner",
	});
}

export default Component;
