import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzf2ejbga.css';
import '../../css/o/o21t2h-ii.css';
import '../../css/l/lv-tnswjo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzf2ejbga"/><path class="o21t2h-ii"/><path class="lv-tnswjo"/>`,
		"fallback": "energy-icons:mobile-charger-20-bold",
	});
}

export default Component;
