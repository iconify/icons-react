import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu8nygbvh.css';
import '../../css/x/xyjx8qb8q.css';
import '../../css/m/m9bq4cboz.css';
import '../../css/f/ft2875bpd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu8nygbvh"/><path class="xyjx8qb8q"/><path class="m9bq4cboz"/><path class="ft2875bpd"/>`,
		"fallback": "energy-icons:transistor-48",
	});
}

export default Component;
