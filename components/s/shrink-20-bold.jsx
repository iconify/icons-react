import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovky5ebwk.css';
import '../../css/e/e0581abux.css';
import '../../css/v/vkg-d9byn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovky5ebwk"/><path class="e0581abux"/><path class="vkg-d9byn"/>`,
		"fallback": "energy-icons:shrink-20-bold",
	});
}

export default Component;
