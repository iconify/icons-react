import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbwcy9q0d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbwcy9q0d"/>`,
		"fallback": "cryptocurrency:shift",
	});
}

export default Component;
