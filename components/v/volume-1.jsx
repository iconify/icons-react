import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlzdue8eu.css';
import '../../css/u/uibgwrabt.css';
import '../../css/s/slljxd43z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlzdue8eu wm-k"/><path class="uibgwrabt wm-k"/><path class="slljxd43z wm-a"/>`,
		"fallback": "withicons-bauhaus:volume-1",
	});
}

export default Component;
