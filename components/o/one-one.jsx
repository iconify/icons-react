import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reoap2bjt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reoap2bjt"/>`,
		"fallback": "icon-park-solid:one-one",
	});
}

export default Component;
