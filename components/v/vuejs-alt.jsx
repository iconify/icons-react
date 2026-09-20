import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze6v68axo.css';
import '../../css/r/rii9k4bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze6v68axo"/><path class="rii9k4bgc"/>`,
		"fallback": "uim:vuejs-alt",
	});
}

export default Component;
