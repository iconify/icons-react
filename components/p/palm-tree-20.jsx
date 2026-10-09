import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piwcl33hw.css';
import '../../css/z/z1hh6xrvl.css';
import '../../css/u/uo2_qkbiq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piwcl33hw"/><path class="z1hh6xrvl"/><path class="uo2_qkbiq"/>`,
		"fallback": "energy-icons:palm-tree-20",
	});
}

export default Component;
