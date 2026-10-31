import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syx48ib4e.css';
import '../../css/u/ui0o6bxsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="syx48ib4e"/><path class="ui0o6bxsw"/></g>`,
		"fallback": "coolicons:trash-duotone-round",
	});
}

export default Component;
