import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0m3atbbj.css';

const viewBox = {"width":532.262,"height":600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0m3atbbj"/>`,
		"fallback": "thesvg:walmart",
	});
}

export default Component;
