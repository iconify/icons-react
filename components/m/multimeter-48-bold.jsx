import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b10s5pbto.css';
import '../../css/p/pcwfzwh2p.css';
import '../../css/g/gtg_d0cmx.css';
import '../../css/l/lvh1_3beu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b10s5pbto"/><path class="pcwfzwh2p"/><path class="gtg_d0cmx"/><path class="lvh1_3beu"/>`,
		"fallback": "energy-icons:multimeter-48-bold",
	});
}

export default Component;
