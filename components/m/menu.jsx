import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9fcrsv2i.css';
import '../../css/g/gke_r-j4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow x9fcrsv2i"/><path class="gke_r-j4g wm-k"/>`,
		"fallback": "withicons-pastel:menu",
	});
}

export default Component;
