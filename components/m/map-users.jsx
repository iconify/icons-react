import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br3iyqaeh.css';
import '../../css/g/gng30g8lb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br3iyqaeh"/><path class="gng30g8lb"/>`,
		"fallback": "gis:map-users",
	});
}

export default Component;
