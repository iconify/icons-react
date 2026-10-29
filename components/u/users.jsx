import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox08aobaw.css';
import '../../css/j/jakijgftv.css';
import '../../css/u/uhwmgubuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox08aobaw wm-a"/><path class="jakijgftv wm-k"/><path class="uhwmgubuh wm-k"/>`,
		"fallback": "withicons-bauhaus:users",
	});
}

export default Component;
