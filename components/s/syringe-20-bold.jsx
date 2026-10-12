import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzk42qbyr.css';
import '../../css/b/bsr_e2r7t.css';
import '../../css/b/bguuzc2kk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzk42qbyr"/><path class="bsr_e2r7t"/><path class="bguuzc2kk"/>`,
		"fallback": "energy-icons:syringe-20-bold",
	});
}

export default Component;
