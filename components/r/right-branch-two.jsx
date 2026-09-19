import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/suv44kimo.css';
import '../../css/g/gycghjb9u.css';
import '../../css/m/mky47mcxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="suv44kimo"/><path class="gycghjb9u"/><path class="mky47mcxt"/></g>`,
		"fallback": "icon-park:right-branch-two",
	});
}

export default Component;
