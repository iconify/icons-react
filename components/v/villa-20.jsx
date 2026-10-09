import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osc_bo0fp.css';
import '../../css/g/gxfstbt8c.css';
import '../../css/a/at5734fty.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osc_bo0fp"/><path class="gxfstbt8c"/><path class="at5734fty"/>`,
		"fallback": "energy-icons:villa-20",
	});
}

export default Component;
