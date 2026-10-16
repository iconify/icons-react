import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etl048b3a.css';
import '../../css/a/alhm_84rh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etl048b3a"/><path class="alhm_84rh"/>`,
		"fallback": "energy-icons:route-20-bold",
	});
}

export default Component;
