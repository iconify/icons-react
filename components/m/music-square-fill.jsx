import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebng0rb1m.css';
import '../../css/t/tevsa0mrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebng0rb1m"/><path class="tevsa0mrw"/>`,
		"fallback": "mage:music-square-fill",
	});
}

export default Component;
