import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn_rhpmlt.css';
import '../../css/i/inx0u8fpo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn_rhpmlt"/><path class="inx0u8fpo"/>`,
		"fallback": "energy-icons:siren-20",
	});
}

export default Component;
