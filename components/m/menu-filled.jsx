import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1bdn5bgd.css';
import '../../css/u/ufxyupbnl.css';
import '../../css/q/qmep5shkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="r1bdn5bgd"/><rect class="ufxyupbnl"/><rect class="qmep5shkh"/>`,
		"fallback": "bitcoin-icons:menu-filled",
	});
}

export default Component;
