import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/job_fgb5d.css';
import '../../css/e/es4tnviht.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="job_fgb5d"/><path class="es4tnviht"/>`,
		"fallback": "energy-icons:pallet-20",
	});
}

export default Component;
