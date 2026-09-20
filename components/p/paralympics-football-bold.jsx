import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m68or31db.css';
import '../../css/k/kiakdnnvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m68or31db"/><path class="kiakdnnvz"/>`,
		"fallback": "streamline-ultimate:paralympics-football-bold",
	});
}

export default Component;
