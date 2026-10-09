import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxp4m9b4u.css';
import '../../css/g/goglxpbft.css';
import '../../css/j/j8jzh-cpm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxp4m9b4u"/><path class="goglxpbft"/><path class="j8jzh-cpm"/>`,
		"fallback": "energy-icons:substation-48",
	});
}

export default Component;
