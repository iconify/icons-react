import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d05zlbb9a.css';
import '../../css/r/rx-9rn84i.css';
import '../../css/u/uvi4e24wd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 d05zlbb9a"/><circle class="clr-i-outline clr-i-outline-path-2 rx-9rn84i"/><path class="clr-i-outline clr-i-outline-path-3 uvi4e24wd"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:warning-line",
	});
}

export default Component;
