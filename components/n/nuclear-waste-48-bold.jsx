import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-lmpi58f.css';
import '../../css/u/uqtphxb9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-lmpi58f"/><path class="uqtphxb9b"/>`,
		"fallback": "energy-icons:nuclear-waste-48-bold",
	});
}

export default Component;
