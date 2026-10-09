import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pni5u1bji.css';
import '../../css/h/hv0sd2vvm.css';
import '../../css/w/w550r6lgv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pni5u1bji"/><path class="hv0sd2vvm"/><path class="w550r6lgv"/>`,
		"fallback": "energy-icons:mountain-river-48-bold",
	});
}

export default Component;
