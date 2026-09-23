import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s56avzt5t.css';
import '../../css/u/uj1x9rxik.css';
import '../../css/f/fxrpm_byw.css';
import '../../css/y/ycf5cvo3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s56avzt5t"/><path class="uj1x9rxik"/><path class="fxrpm_byw"/><path class="ycf5cvo3x"/></g>`,
		"fallback": "keyline-icons:search-sparkles-duotone",
	});
}

export default Component;
