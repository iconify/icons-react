import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yavxk_bsz.css';
import '../../css/i/ixpy7yyki.css';
import '../../css/p/pn-hlnbwd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yavxk_bsz"/><path class="ixpy7yyki"/><path class="pn-hlnbwd"/>`,
		"fallback": "gis:profile",
	});
}

export default Component;
