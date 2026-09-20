import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c385roevk.css';
import '../../css/v/va4-j6bnn.css';
import '../../css/m/mmk5vedsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c385roevk"/><path class="va4-j6bnn"/><path class="mmk5vedsu"/>`,
		"fallback": "token:tut",
	});
}

export default Component;
