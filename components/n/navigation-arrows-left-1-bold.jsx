import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arlrzbbsj.css';
import '../../css/r/rkc5kdsmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arlrzbbsj"/><path class="rkc5kdsmw"/>`,
		"fallback": "streamline-ultimate:navigation-arrows-left-1-bold",
	});
}

export default Component;
