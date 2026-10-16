import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii45op72q.css';
import '../../css/m/mfv2n_b4f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii45op72q"/><path class="mfv2n_b4f"/>`,
		"fallback": "energy-icons:solar-lantern-20",
	});
}

export default Component;
