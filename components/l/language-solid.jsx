import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5pfuk6lz.css';
import '../../css/p/ps_hawo5j.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 z5pfuk6lz"/><path class="clr-i-solid clr-i-solid-path-2 ps_hawo5j"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:language-solid",
	});
}

export default Component;
