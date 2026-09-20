import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhsmtt9-j.css';
import '../../css/f/f_0sarbla.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhsmtt9-j"/><path class="f_0sarbla ouiIcon__fillSecondary"/>`,
		"fallback": "oui:ml-data-visualizer",
	});
}

export default Component;
