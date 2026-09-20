import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkb0jcelk.css';
import '../../css/b/breyi0bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkb0jcelk"/><path class="breyi0bij"/>`,
		"fallback": "tdesign:radio-2-filled",
	});
}

export default Component;
