import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9ps03s-o.css';
import '../../css/q/q0ooqm0dp.css';
import '../../css/h/hcg44lb5l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9ps03s-o"/><path class="q0ooqm0dp"/><path class="hcg44lb5l"/>`,
		"fallback": "energy-icons:report-20-bold",
	});
}

export default Component;
