import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4zeb_b-f.css';
import '../../css/a/aihie_dzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4zeb_b-f"/><path class="aihie_dzt"/>`,
		"fallback": "solar:map-arrow-right-bold-duotone",
	});
}

export default Component;
