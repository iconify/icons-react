import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnh4tjnml.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnh4tjnml"/>`,
		"fallback": "wpf:user-shield",
	});
}

export default Component;
