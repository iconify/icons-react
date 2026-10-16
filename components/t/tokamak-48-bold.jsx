import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osf7zog9q.css';
import '../../css/h/h818ewufo.css';
import '../../css/k/krsiqfbpt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osf7zog9q"/><path class="h818ewufo"/><path class="krsiqfbpt"/>`,
		"fallback": "energy-icons:tokamak-48-bold",
	});
}

export default Component;
