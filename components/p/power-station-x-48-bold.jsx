import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfi146w-l.css';
import '../../css/e/eeps4wpgj.css';
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
		"content": `<path class="pfi146w-l"/><path class="eeps4wpgj"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:power-station-x-48-bold",
	});
}

export default Component;
