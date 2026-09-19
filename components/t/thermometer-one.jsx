import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thtc11bff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thtc11bff"/>`,
		"fallback": "icon-park-solid:thermometer-one",
	});
}

export default Component;
