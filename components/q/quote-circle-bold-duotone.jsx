import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrdvcwidb.css';
import '../../css/u/ug-4vnsfs.css';
import '../../css/w/we0hyhblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrdvcwidb"/><path class="ug-4vnsfs"/><path class="we0hyhblq"/>`,
		"fallback": "solar:quote-circle-bold-duotone",
	});
}

export default Component;
