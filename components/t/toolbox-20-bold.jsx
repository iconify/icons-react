import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvyjh5a_p.css';
import '../../css/g/g95ma61en.css';
import '../../css/s/s4i4qlbxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvyjh5a_p"/><path class="g95ma61en"/><path class="s4i4qlbxb"/>`,
		"fallback": "energy-icons:toolbox-20-bold",
	});
}

export default Component;
