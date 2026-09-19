import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm_6fobjp.css';
import '../../css/h/h1ytemzns.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm_6fobjp"/><path class="h1ytemzns"/>`,
		"fallback": "gis:map-options-alt",
	});
}

export default Component;
