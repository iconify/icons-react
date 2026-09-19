import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/j/jah8xlb5c.css';
import '../../css/j/j1mhik9ml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="jah8xlb5c"/><path class="j1mhik9ml"/></g>`,
		"fallback": "icon-park:towel",
	});
}

export default Component;
