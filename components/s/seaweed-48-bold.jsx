import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqep3ob2t.css';
import '../../css/p/pvryphb7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqep3ob2t"/><path class="pvryphb7g"/>`,
		"fallback": "energy-icons:seaweed-48-bold",
	});
}

export default Component;
