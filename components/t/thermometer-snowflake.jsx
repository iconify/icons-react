import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dsy6kkfed.css';
import '../../css/f/fhclggnbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dsy6kkfed"/><path class="fhclggnbg"/></g>`,
		"fallback": "lucide:thermometer-snowflake",
	});
}

export default Component;
