import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbjz5kw6b.css';
import '../../css/m/mly957b2e.css';
import '../../css/m/mjkz43bbw.css';
import '../../css/b/b8h19izcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbjz5kw6b"/><path class="mly957b2e"/><path class="mjkz43bbw"/><path class="b8h19izcu"/>`,
		"fallback": "solar:pills-2-bold",
	});
}

export default Component;
