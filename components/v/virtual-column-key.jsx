import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl7jbz5fr.css';
import '../../css/h/h_3i35b7d.css';
import '../../css/y/y-dj3mnsk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="gl7jbz5fr"/><path class="h_3i35b7d"/><path class="y-dj3mnsk"/>`,
		"fallback": "carbon:virtual-column-key",
	});
}

export default Component;
