import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk1vdrbbx.css';
import '../../css/v/v038z-9jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk1vdrbbx"/><path class="v038z-9jt"/>`,
		"fallback": "nrk:tilgjengelighet-horbarhet",
	});
}

export default Component;
