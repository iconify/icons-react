import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz-t0mr5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mz-t0mr5w"/>`,
		"fallback": "streamline-plump:sun-solid",
	});
}

export default Component;
