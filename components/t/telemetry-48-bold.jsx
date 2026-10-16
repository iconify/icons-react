import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6pxhx3fr.css';
import '../../css/b/bj9m5zbrg.css';
import '../../css/e/e13md-fck.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6pxhx3fr"/><path class="bj9m5zbrg"/><path class="e13md-fck"/>`,
		"fallback": "energy-icons:telemetry-48-bold",
	});
}

export default Component;
