import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quv0rgtyg.css';
import '../../css/h/hgxtv_kog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="quv0rgtyg"/><path class="hgxtv_kog"/>`,
		"fallback": "qlementine-icons:speaker-1-16",
	});
}

export default Component;
