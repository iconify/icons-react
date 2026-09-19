import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd5fshb7k.css';
import '../../css/v/v1a-uw1og.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged zd5fshb7k"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-2--badged v1a-uw1og"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tag-solid-badged",
	});
}

export default Component;
