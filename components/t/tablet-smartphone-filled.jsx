import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1se8tbgo.css';
import '../../css/q/qje49sx-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m1se8tbgo"/><path class="qje49sx-l"/>`,
		"fallback": "lucide-extended:tablet-smartphone-filled",
	});
}

export default Component;
