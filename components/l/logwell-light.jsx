import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcozblb4e.css';
import '../../css/y/yl94r0wtm.css';
import '../../css/p/priknnbhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcozblb4e"/><path class="yl94r0wtm"/><path class="priknnbhf"/>`,
		"fallback": "selfhst:logwell-light",
	});
}

export default Component;
