import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6304ibce.css';
import '../../css/a/aygw_60rm.css';
import '../../css/q/qntnbrb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6304ibce"/><path class="aygw_60rm"/><path clip-rule="evenodd" class="qntnbrb_a"/>`,
		"fallback": "solar:rounded-magnifer-bug-bold-duotone",
	});
}

export default Component;
