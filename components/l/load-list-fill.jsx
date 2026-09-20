import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/np_0edbvt.css';
import '../../css/d/dsdum7bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="np_0edbvt"/><path clip-rule="evenodd" class="dsdum7bzj"/></g>`,
		"fallback": "lets-icons:load-list-fill",
	});
}

export default Component;
