import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_35gz5vf.css';
import '../../css/m/m2fk12xdu.css';
import '../../css/j/jj_zol4wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_35gz5vf"/><path clip-rule="evenodd" class="m2fk12xdu"/><path class="jj_zol4wm"/>`,
		"fallback": "nrk:tilgjengelighet-synstolking",
	});
}

export default Component;
