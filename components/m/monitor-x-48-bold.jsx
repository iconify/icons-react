import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vitunp1ja.css';
import '../../css/p/phox42bnd.css';
import '../../css/m/ms4k0rbjg.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vitunp1ja"/><path class="phox42bnd"/><path class="ms4k0rbjg"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:monitor-x-48-bold",
	});
}

export default Component;
