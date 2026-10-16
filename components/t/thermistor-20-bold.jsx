import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8v8c77oa.css';
import '../../css/g/gt6n7jbpq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8v8c77oa"/><path class="gt6n7jbpq"/>`,
		"fallback": "energy-icons:thermistor-20-bold",
	});
}

export default Component;
