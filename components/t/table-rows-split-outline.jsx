import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0elxlbwx.css';
import '../../css/w/wo598pssi.css';
import '../../css/j/jy3zus3kf.css';
import '../../css/o/ogvdztnfz.css';
import '../../css/i/iu96zrbec.css';
import '../../css/c/c0yhv_8sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0elxlbwx"/><path clip-rule="evenodd" class="wo598pssi"/><path class="jy3zus3kf"/><path class="ogvdztnfz"/><path class="iu96zrbec"/><path class="c0yhv_8sg"/>`,
		"fallback": "solar:table-rows-split-outline",
	});
}

export default Component;
