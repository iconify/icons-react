import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5odp7b0s.css';
import '../../css/a/asas4sbys.css';
import '../../css/q/qc5k0pb3l.css';
import '../../css/d/drd-mi95a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5odp7b0s"/><path class="asas4sbys"/><path class="qc5k0pb3l"/><path class="drd-mi95a"/>`,
		"fallback": "energy-icons:store-48",
	});
}

export default Component;
