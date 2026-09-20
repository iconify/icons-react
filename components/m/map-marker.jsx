import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e65_xe.css';
import '../../css/l/lb41ec.css';
import '../../css/s/so-from-48.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e65_xe"/><circle class="lb41ec"/>`,
		"fallback": "line-md:map-marker",
	});
}

export default Component;
