import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp_bqbcum.css';
import '../../css/s/s9t-vws4d.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp_bqbcum"/><path class="s9t-vws4d"/>`,
		"fallback": "thesvg-color:sive",
	});
}

export default Component;
