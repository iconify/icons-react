import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq_pzdluz.css';
import '../../css/s/sp9gcvbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq_pzdluz"/><path class="sp9gcvbbv"/>`,
		"fallback": "streamline-ultimate:video-edit-cut-bold",
	});
}

export default Component;
