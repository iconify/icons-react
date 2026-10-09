import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdy4ipb5m.css';
import '../../css/s/swkeh7byr.css';
import '../../css/z/zjjlddhpx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdy4ipb5m"/><path class="swkeh7byr"/><path class="zjjlddhpx"/>`,
		"fallback": "energy-icons:mooring-20-bold",
	});
}

export default Component;
