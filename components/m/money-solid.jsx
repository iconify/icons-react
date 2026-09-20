import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu5lx12xc.css';
import '../../css/v/v3045wb7h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu5lx12xc"/><path clip-rule="evenodd" class="v3045wb7h"/>`,
		"fallback": "teenyicons:money-solid",
	});
}

export default Component;
