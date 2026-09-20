import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vjlo9pbii.css';
import '../../css/t/tsag75lsy.css';
import '../../css/n/nx5xs9buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vjlo9pbii"/><path clip-rule="evenodd" class="tsag75lsy"/><path clip-rule="evenodd" class="nx5xs9buk"/></g>`,
		"fallback": "solar:medical-kit-outline",
	});
}

export default Component;
