import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5vpx869x.css';
import '../../css/c/cjykg8bjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5vpx869x"/><path class="cjykg8bjw"/>`,
		"fallback": "energy-icons:subsea-cable-48",
	});
}

export default Component;
