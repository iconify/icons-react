import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiqmkkbbu.css';
import '../../css/f/fup0j_byx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiqmkkbbu"/><path class="fup0j_byx"/>`,
		"fallback": "streamline-pixel:internet-network-cloud-off",
	});
}

export default Component;
