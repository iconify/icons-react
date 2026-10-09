import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f70j8yk4i.css';
import '../../css/m/mytw5ubob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f70j8yk4i"/><path class="mytw5ubob"/>`,
		"fallback": "energy-icons:sun-bolt-48",
	});
}

export default Component;
