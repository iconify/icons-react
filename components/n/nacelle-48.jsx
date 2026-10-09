import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8tz7uh6r.css';
import '../../css/l/lsbxu7b3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8tz7uh6r"/><path class="lsbxu7b3y"/>`,
		"fallback": "energy-icons:nacelle-48",
	});
}

export default Component;
