import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id42arbvz.css';
import '../../css/u/uaycyrbmu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id42arbvz"/><path class="clr-i-alert uaycyrbmu"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:map-solid-alerted",
	});
}

export default Component;
