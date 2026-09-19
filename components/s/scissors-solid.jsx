import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfqkh-b5y.css';
import '../../css/h/ho3fq4w0k.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 vfqkh-b5y"/><path class="clr-i-solid clr-i-solid-path-2 ho3fq4w0k"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:scissors-solid",
	});
}

export default Component;
