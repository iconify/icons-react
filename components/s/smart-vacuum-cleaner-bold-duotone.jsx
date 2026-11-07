import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/ar2pifewr.css';
import '../../css/l/l5y6mtboz.css';
import '../../css/c/c1agxfbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="ar2pifewr"/><path class="l5y6mtboz"/></g><path class="c1agxfbhl"/>`,
		"fallback": "solar:smart-vacuum-cleaner-bold-duotone",
	});
}

export default Component;
