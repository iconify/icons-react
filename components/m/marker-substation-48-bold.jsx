import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlms99xu.css';
import '../../css/k/kd9hivzqs.css';
import '../../css/a/ay7-wge4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlms99xu"/><path class="kd9hivzqs"/><path class="ay7-wge4s"/>`,
		"fallback": "energy-icons:marker-substation-48-bold",
	});
}

export default Component;
