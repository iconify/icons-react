import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wblsxceup.css';
import '../../css/t/t3bae-38y.css';
import '../../css/o/ovk9uybhs.css';
import '../../css/u/ut-furcmy.css';
import '../../css/m/m-0awcbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wblsxceup wm-shadow"/><path class="t3bae-38y wm-shadow"/><path class="ovk9uybhs"/><path class="ut-furcmy"/><path class="m-0awcbcl wm-s"/></g>`,
		"fallback": "withicons-brutal:list-plus",
	});
}

export default Component;
