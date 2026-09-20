import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lff1pxbum.css';
import '../../css/j/jd3246bse.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lff1pxbum"/><path class="jd3246bse"/>`,
		"fallback": "nimbus:lock",
	});
}

export default Component;
