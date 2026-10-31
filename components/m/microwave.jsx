import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/weo9vnbgh.css';
import '../../css/d/dv87dmbeo.css';
import '../../css/i/ic9lyt8ds.css';
import '../../css/v/v2g5k0bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="weo9vnbgh wm-shadow"/><path class="dv87dmbeo wm-shadow"/><path class="ic9lyt8ds"/><path class="v2g5k0bbc"/></g>`,
		"fallback": "withicons-brutal:microwave",
	});
}

export default Component;
