import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbsqx3bdi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbsqx3bdi"/>`,
		"fallback": "fluent-mdl2:mini-contract-mirrored",
	});
}

export default Component;
