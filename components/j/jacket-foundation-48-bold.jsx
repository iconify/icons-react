import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoa334z6k.css';
import '../../css/i/i6_7zgbcw.css';
import '../../css/y/y555clblx.css';
import '../../css/b/b5hpt1xjp.css';
import '../../css/x/xwv5_kt0o.css';
import '../../css/v/vuzrlx4fi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoa334z6k"/><path class="i6_7zgbcw"/><path class="y555clblx"/><path class="b5hpt1xjp"/><path class="xwv5_kt0o"/><path class="vuzrlx4fi"/>`,
		"fallback": "energy-icons:jacket-foundation-48-bold",
	});
}

export default Component;
