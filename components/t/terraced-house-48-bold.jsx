import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgmleib2q.css';
import '../../css/l/lw9-dbcju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgmleib2q"/><path class="lw9-dbcju"/>`,
		"fallback": "energy-icons:terraced-house-48-bold",
	});
}

export default Component;
