import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sld39kbbp.css';
import '../../css/o/o4c4j_blr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sld39kbbp"/><path class="o4c4j_blr"/>`,
		"fallback": "octicon:sidebar-expand-16",
	});
}

export default Component;
