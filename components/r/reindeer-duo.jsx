import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gktghc_ap.css';
import '../../css/a/amjr7kbuv.css';
import '../../css/r/ryawf97ba.css';
import '../../css/o/o06sic7wt.css';
import '../../css/k/kokfi0b9c.css';
import '../../css/g/g4wcdukcc.css';
import '../../css/z/zoclu7wtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gktghc_ap"/><path class="amjr7kbuv"/><path class="ryawf97ba wm-s"/><path class="o06sic7wt wm-s"/><path class="kokfi0b9c"/><path class="g4wcdukcc"/><path class="wm-a zoclu7wtg"/></g>`,
		"fallback": "withicons:reindeer-duo",
	});
}

export default Component;
