import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_hltyb1h.css';
import '../../css/f/fvgea5bgo.css';
import '../../css/v/vmdmbbhtx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_hltyb1h"/><path class="fvgea5bgo"/><path class="vmdmbbhtx"/>`,
		"fallback": "energy-icons:tokamak-20-bold",
	});
}

export default Component;
