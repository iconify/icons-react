import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmwpenbhg.css';
import '../../css/i/i4bpspa_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer pmwpenbhg"/><path class="duoicon-primary-layer i4bpspa_v"/>`,
		"fallback": "duo-icons:upload-file",
	});
}

export default Component;
