import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuh6h7j6z.css';
import '../../css/x/xfomdp99f.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuh6h7j6z"/><circle class="xfomdp99f"/>`,
		"fallback": "map:male",
	});
}

export default Component;
