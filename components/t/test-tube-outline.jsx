import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv1ykgv5n.css';
import '../../css/x/x6w6rpbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jv1ykgv5n"/><path clip-rule="evenodd" class="x6w6rpbzx"/>`,
		"fallback": "cuida:test-tube-outline",
	});
}

export default Component;
