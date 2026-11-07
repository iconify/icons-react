import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyqfhih1j.css';
import '../../css/f/fkrfxuhpy.css';
import '../../css/k/kxndlgbvh.css';
import '../../css/e/eu14ky5fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyqfhih1j"/><path class="fkrfxuhpy"/><path class="kxndlgbvh"/><path class="eu14ky5fi"/>`,
		"fallback": "solar:stars-line-bold",
	});
}

export default Component;
