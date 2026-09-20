import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4-v4imeh.css';
import '../../css/m/maj_0caaz.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c4-v4imeh"/><path class="maj_0caaz"/>`,
		"fallback": "lineicons:layers-1",
	});
}

export default Component;
