import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw05wmbvu.css';
import '../../css/x/xncsss79o.css';
import '../../css/f/fxs4l-b8z.css';
import '../../css/l/l3s05dbra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw05wmbvu"/><path class="xncsss79o"/><path class="fxs4l-b8z"/><path class="l3s05dbra"/>`,
		"fallback": "energy-icons:snowflake-48-bold",
	});
}

export default Component;
