import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjexg1fid.css';
import '../../css/e/e5jn00b6w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 xjexg1fid"/><path class="clr-i-solid clr-i-solid-path-2 e5jn00b6w"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:ssd-solid",
	});
}

export default Component;
