import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlzjfpbie.css';
import '../../css/w/wode1sbbf.css';
import '../../css/t/t3m92_bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlzjfpbie"/><path class="wode1sbbf"/><path class="t3m92_bgb"/>`,
		"fallback": "eos-icons:locked-env-outlined",
	});
}

export default Component;
