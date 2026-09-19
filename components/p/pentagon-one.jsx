import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgh0_tp3p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgh0_tp3p"/>`,
		"fallback": "icon-park-solid:pentagon-one",
	});
}

export default Component;
