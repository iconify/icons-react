import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f87i2j8hs.css';
import '../../css/b/bo_tdpbvg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f87i2j8hs"/><circle class="bo_tdpbvg"/>`,
		"fallback": "catppuccin:moonrepo",
	});
}

export default Component;
