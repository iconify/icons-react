import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_6cwfbbm.css';
import '../../css/z/zoahz159d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_6cwfbbm"/><path clip-rule="evenodd" class="zoahz159d"/>`,
		"fallback": "solar:panel-left-open-outline",
	});
}

export default Component;
