import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlzdue8eu.css';
import '../../css/u/uibgwrabt.css';
import '../../css/w/w_kzihr4x.css';
import '../../css/h/hnyd30bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlzdue8eu wm-k"/><path class="uibgwrabt wm-k"/><path class="w_kzihr4x wm-a"/><path class="hnyd30bxu wm-a"/>`,
		"fallback": "withicons-bauhaus:volume",
	});
}

export default Component;
