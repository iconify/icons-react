import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srlizxq6t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srlizxq6t"/>`,
		"fallback": "doodle-icons:layers",
	});
}

export default Component;
