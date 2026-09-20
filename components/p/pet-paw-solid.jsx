import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb-db-d4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb-db-d4u"/>`,
		"fallback": "streamline-plump:pet-paw-solid",
	});
}

export default Component;
