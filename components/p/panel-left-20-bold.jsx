import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkpulpb9y.css';
import '../../css/a/acc7t232x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkpulpb9y"/><path class="acc7t232x"/>`,
		"fallback": "energy-icons:panel-left-20-bold",
	});
}

export default Component;
