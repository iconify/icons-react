import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2tyl-alg.css';
import '../../css/q/q6x95eb8d.css';
import '../../css/k/kt0rrab9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2tyl-alg"/><path class="q6x95eb8d"/><path class="kt0rrab9k"/>`,
		"fallback": "streamline-ultimate:show-theater-masks-bold",
	});
}

export default Component;
