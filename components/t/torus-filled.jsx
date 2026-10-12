import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pigk12xyw.css';
import '../../css/y/y_8olsb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pigk12xyw"/><path clip-rule="evenodd" class="y_8olsb-j"/>`,
		"fallback": "lucide-extended:torus-filled",
	});
}

export default Component;
