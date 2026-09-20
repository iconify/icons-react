import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2i2aodww.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2i2aodww"/>`,
		"fallback": "streamline-flex:pet-paw",
	});
}

export default Component;
