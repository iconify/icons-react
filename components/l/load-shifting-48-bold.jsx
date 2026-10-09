import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5paa4bib.css';
import '../../css/p/p3x5527zo.css';
import '../../css/d/dkwl10z_r.css';
import '../../css/o/o10w4gbhg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5paa4bib"/><path class="p3x5527zo"/><path class="dkwl10z_r"/><path class="o10w4gbhg"/>`,
		"fallback": "energy-icons:load-shifting-48-bold",
	});
}

export default Component;
