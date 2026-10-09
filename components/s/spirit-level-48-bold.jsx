import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hda2nzbnb.css';
import '../../css/z/zodp_k1_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hda2nzbnb"/><path class="zodp_k1_o"/>`,
		"fallback": "energy-icons:spirit-level-48-bold",
	});
}

export default Component;
