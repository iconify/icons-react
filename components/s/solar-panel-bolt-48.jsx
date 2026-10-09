import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf9z-jb7h.css';
import '../../css/a/ah_0o9bzq.css';
import '../../css/j/jih-r1b_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf9z-jb7h"/><path class="ah_0o9bzq"/><path class="jih-r1b_t"/>`,
		"fallback": "energy-icons:solar-panel-bolt-48",
	});
}

export default Component;
