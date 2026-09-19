import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc_8i2kot.css';
import '../../css/c/cljz3cbsp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc_8i2kot"/><path clip-rule="evenodd" class="cljz3cbsp"/>`,
		"fallback": "heroicons:server-16-solid",
	});
}

export default Component;
