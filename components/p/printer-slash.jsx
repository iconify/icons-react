import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hvak45gtf.css';
import '../../css/m/m3w7a8b7o.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hvak45gtf"/><path class="m3w7a8b7o"/><path class="rsrhfac5n"/></g>`,
		"fallback": "reicon:printer-slash",
	});
}

export default Component;
