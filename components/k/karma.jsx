import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptycv73np.css';
import '../../css/d/d39hcpo6r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptycv73np"/><path class="d39hcpo6r"/>`,
		"fallback": "material-icon-theme:karma",
	});
}

export default Component;
