import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lky_h52fv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lky_h52fv"/>`,
		"fallback": "gravity-ui:magnet",
	});
}

export default Component;
