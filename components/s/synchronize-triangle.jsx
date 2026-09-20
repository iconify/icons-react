import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/j/jti7sg69j.css';
import '../../css/p/pvmyau5uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="jti7sg69j"/><path class="pvmyau5uz"/></g>`,
		"fallback": "streamline-cyber-color:synchronize-triangle",
	});
}

export default Component;
