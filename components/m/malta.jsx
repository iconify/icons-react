import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr8ohcc6r.css';
import '../../css/d/d2h4xtbmj.css';
import '../../css/y/y_qlxlb5x.css';
import '../../css/g/gtq3e5cts.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr8ohcc6r"/><path class="d2h4xtbmj"/><path class="y_qlxlb5x"/><path class="gtq3e5cts"/>`,
		"fallback": "tabler-flags:malta",
	});
}

export default Component;
