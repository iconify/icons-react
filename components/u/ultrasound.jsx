import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b84ui104o.css';
import '../../css/w/wcbu4acoh.css';
import '../../css/y/y--cdmb_c.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b84ui104o"/><path class="wcbu4acoh"/><path class="y--cdmb_c"/>`,
		"fallback": "medical-icon:ultrasound",
	});
}

export default Component;
