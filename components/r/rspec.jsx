import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz97jizsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz97jizsz"/>`,
		"fallback": "file-icons:rspec",
	});
}

export default Component;
