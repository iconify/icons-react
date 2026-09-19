import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsa0nvhry.css';
import '../../css/a/akvx_0hja.css';
import '../../css/n/nqd-w4r2c.css';
import '../../css/b/byxrqbd5t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsa0nvhry"/><path class="akvx_0hja"/><path class="nqd-w4r2c"/><path class="byxrqbd5t"/>`,
		"fallback": "carbon:nominate",
	});
}

export default Component;
