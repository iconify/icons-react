import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxa326maf.css';
import '../../css/r/r7uozib3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxa326maf"/><path class="r7uozib3l"/>`,
		"fallback": "mage:preview-circle-fill",
	});
}

export default Component;
