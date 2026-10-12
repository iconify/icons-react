import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrjmwob1j.css';
import '../../css/g/gbt6yvbgo.css';
import '../../css/u/u95awmdai.css';
import '../../css/n/n4gxhbcfl.css';
import '../../css/n/naj2oabkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrjmwob1j"/><path class="gbt6yvbgo"/><path class="u95awmdai"/><path class="n4gxhbcfl"/><path class="naj2oabkq"/>`,
		"fallback": "energy-icons:printer-3d-20-bold",
	});
}

export default Component;
