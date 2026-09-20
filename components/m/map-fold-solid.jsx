import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suzpy16gb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suzpy16gb"/>`,
		"fallback": "streamline-plump:map-fold-solid",
	});
}

export default Component;
