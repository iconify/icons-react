import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux88xgv7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux88xgv7p"/>`,
		"fallback": "selfhst:jackett",
	});
}

export default Component;
