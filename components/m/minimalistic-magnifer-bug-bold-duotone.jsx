import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-tmtc6ls.css';
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
		"content": `<path clip-rule="evenodd" class="j-tmtc6ls"/><path class="aygw_60rm"/><path clip-rule="evenodd" class="qntnbrb_a"/>`,
		"fallback": "solar:minimalistic-magnifer-bug-bold-duotone",
	});
}

export default Component;
