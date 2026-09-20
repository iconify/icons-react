import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6r127bgj.css';
import '../../css/k/k-ritbbgp.css';
import '../../css/l/l_kmzlb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6r127bgj"/><path class="k-ritbbgp"/><path class="l_kmzlb4p"/>`,
		"fallback": "streamline-freehand:messages-bubble-square-settings",
	});
}

export default Component;
