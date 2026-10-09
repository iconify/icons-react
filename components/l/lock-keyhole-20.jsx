import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okzvs_blx.css';
import '../../css/g/gu1a-jb1z.css';
import '../../css/t/tvwqtv2ki.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okzvs_blx"/><path class="gu1a-jb1z"/><path class="tvwqtv2ki"/>`,
		"fallback": "energy-icons:lock-keyhole-20",
	});
}

export default Component;
