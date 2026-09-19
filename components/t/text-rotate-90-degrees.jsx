import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o05-ijw2e.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o05-ijw2e"/>`,
		"fallback": "fluent-mdl2:text-rotate-90-degrees",
	});
}

export default Component;
