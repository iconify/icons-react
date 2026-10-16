import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gugafwbru.css';
import '../../css/p/pkpr5tboh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gugafwbru"/><path class="pkpr5tboh"/>`,
		"fallback": "energy-icons:tailings-dam-20",
	});
}

export default Component;
