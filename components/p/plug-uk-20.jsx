import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqrpztbuq.css';
import '../../css/g/g5xhmle3d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqrpztbuq"/><path class="g5xhmle3d"/>`,
		"fallback": "energy-icons:plug-uk-20",
	});
}

export default Component;
