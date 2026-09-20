import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i2j94fbrz.css';
import '../../css/z/zofwkuhyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="i2j94fbrz"/><path class="zofwkuhyu"/></g>`,
		"fallback": "meteor-icons:map-pin",
	});
}

export default Component;
