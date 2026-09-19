import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrp9thb_f.css';
import '../../css/y/yewmc_bur.css';
import '../../css/h/hvsnt-1bk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrp9thb_f"/><path class="yewmc_bur"/><path class="hvsnt-1bk"/>`,
		"fallback": "carbon:touch-2",
	});
}

export default Component;
