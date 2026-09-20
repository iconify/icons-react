import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf1wx9bka.css';
import '../../css/s/s6yt05ruj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pf1wx9bka"/><path class="s6yt05ruj"/>`,
		"fallback": "lets-icons:user-alt-fill",
	});
}

export default Component;
