import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vij074qlg.css';
import '../../css/i/iabrmvfcy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vij074qlg"/><path class="iabrmvfcy"/>`,
		"fallback": "gis:search-feature",
	});
}

export default Component;
