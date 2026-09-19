import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv7o-5b3h.css';
import '../../css/d/d_h7705bc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv7o-5b3h"/><path class="d_h7705bc"/>`,
		"fallback": "carbon:snow-blizzard",
	});
}

export default Component;
