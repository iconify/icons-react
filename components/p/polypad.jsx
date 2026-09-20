import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqcjrr7fx.css';
import '../../css/q/q77si10cw.css';
import '../../css/v/vco9mxxbz.css';
import '../../css/c/c721j6aor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqcjrr7fx"/><path class="q77si10cw"/><path class="vco9mxxbz"/><path class="c721j6aor"/>`,
		"fallback": "token:polypad",
	});
}

export default Component;
