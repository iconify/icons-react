import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymn00fgdm.css';
import '../../css/v/vowsucibp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ymn00fgdm"/><path class="vowsucibp"/>`,
		"fallback": "gridicons:user-add",
	});
}

export default Component;
