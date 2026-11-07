import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gswtq35or.css';
import '../../css/j/jo7hcbc0s.css';
import '../../css/n/n14vvqz5v.css';
import '../../css/e/erg4rkmlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gswtq35or"/><path class="jo7hcbc0s"/><path class="n14vvqz5v"/><path class="erg4rkmlt"/>`,
		"fallback": "solar:smart-home-angle-bold-duotone",
	});
}

export default Component;
