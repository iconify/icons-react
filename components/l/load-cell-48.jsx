import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz1cr6bmp.css';
import '../../css/t/tvqb9tb9q.css';
import '../../css/f/fm68w8yya.css';
import '../../css/f/fonho850d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz1cr6bmp"/><path class="tvqb9tb9q"/><path class="fm68w8yya"/><path class="fonho850d"/>`,
		"fallback": "energy-icons:load-cell-48",
	});
}

export default Component;
