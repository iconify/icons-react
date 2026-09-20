import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uatd2gfja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uatd2gfja"/>`,
		"fallback": "streamline-plump:pet-paw",
	});
}

export default Component;
