import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb-ftubup.css';
import '../../css/e/e3bbx6bvh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb-ftubup"/><path clip-rule="evenodd" class="e3bbx6bvh"/>`,
		"fallback": "teenyicons:search-property-solid",
	});
}

export default Component;
