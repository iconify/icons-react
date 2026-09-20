import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf1wx9bka.css';
import '../../css/r/r29erebio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pf1wx9bka"/><path class="r29erebio"/>`,
		"fallback": "lets-icons:user-alt-duotone",
	});
}

export default Component;
