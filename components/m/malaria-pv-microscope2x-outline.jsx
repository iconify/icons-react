import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5dz2tbee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z5dz2tbee"/>`,
		"fallback": "healthicons:malaria-pv-microscope2x-outline",
	});
}

export default Component;
