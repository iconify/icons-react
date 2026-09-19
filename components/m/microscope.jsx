import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gntq4wbux.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gntq4wbux"/>`,
		"fallback": "fa7-solid:microscope",
	});
}

export default Component;
