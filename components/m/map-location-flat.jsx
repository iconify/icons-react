import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gpuw72fip.css';
import '../../css/k/kl7dgmbhv.css';
import '../../css/f/fk2z6voyg.css';
import '../../css/t/t03t62bhf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gpuw72fip"/><path class="kl7dgmbhv"/><path class="fk2z6voyg"/><path class="t03t62bhf"/></g>`,
		"fallback": "streamline-flex-color:map-location-flat",
	});
}

export default Component;
