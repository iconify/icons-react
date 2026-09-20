import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig-dzq6hv.css';
import '../../css/h/hhvthyu9m.css';
import '../../css/m/mi4jrix-s.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/c/cgxswbbyp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ig-dzq6hv"><circle class="hhvthyu9m"/><path class="mi4jrix-s"/></g><g class="x8poo_bjf"><circle class="hhvthyu9m"/><path class="cgxswbbyp"/></g>`,
		"fallback": "openmoji:person-cartwheeling-light-skin-tone",
	});
}

export default Component;
