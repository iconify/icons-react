import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxd_hdc6p.css';
import '../../css/l/l4_6mubqz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 xxd_hdc6p"/><path class="clr-i-solid clr-i-solid-path-2 l4_6mubqz"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:thumbs-up-solid",
	});
}

export default Component;
