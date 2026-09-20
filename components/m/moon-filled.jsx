import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyd_hm.css';
import '../../css/y/ydovum.css';
import '../../css/z/zokflo.css';
import '../../css/x/xgpo5m.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyd_hm ydovum"/><path class="ydovum zokflo"/><path class="xgpo5m ydovum"/>`,
		"fallback": "line-md:moon-filled",
	});
}

export default Component;
