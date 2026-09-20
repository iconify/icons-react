import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt9b-hb6i.css';
import '../../css/e/esks6_bvk.css';
import '../../css/h/hgxtv_kog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rt9b-hb6i"/><path clip-rule="evenodd" class="esks6_bvk"/><path class="hgxtv_kog"/>`,
		"fallback": "qlementine-icons:speaker-2-16",
	});
}

export default Component;
