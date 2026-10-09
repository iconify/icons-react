import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auq7ad76r.css';
import '../../css/r/ro9kkyupz.css';
import '../../css/c/cnrdjjbmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auq7ad76r"/><path class="ro9kkyupz"/><path class="cnrdjjbmd"/>`,
		"fallback": "energy-icons:transformer-48",
	});
}

export default Component;
