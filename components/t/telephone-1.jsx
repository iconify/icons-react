import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wllv4abeh.css';
import '../../css/u/ui1cszbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wllv4abeh"/><path class="ui1cszbdy"/>`,
		"fallback": "lineicons:telephone-1",
	});
}

export default Component;
