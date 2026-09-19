import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyp_ahbry.css';
import '../../css/j/j5apd9bcp.css';
import '../../css/g/gxw0w0bbb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 cyp_ahbry"/><path class="clr-i-solid clr-i-solid-path-2 j5apd9bcp"/><path class="clr-i-solid clr-i-solid-path-3 gxw0w0bbb"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:rack-server-solid",
	});
}

export default Component;
