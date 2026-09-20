import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9ofgyb2j.css';
import '../../css/n/n2oxcyuhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9ofgyb2j"/><path class="n2oxcyuhd"/></g>`,
		"fallback": "solar:plain-line-duotone",
	});
}

export default Component;
