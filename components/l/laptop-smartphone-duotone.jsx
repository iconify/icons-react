import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b592vvi5s.css';
import '../../css/j/jy1naacqm.css';
import '../../css/i/ijh4fpfgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b592vvi5s"/><path class="jy1naacqm"/><path clip-rule="evenodd" class="ijh4fpfgt"/></g>`,
		"fallback": "keyline-icons:laptop-smartphone-duotone",
	});
}

export default Component;
