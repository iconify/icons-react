import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbnvcacjp.css';
import '../../css/f/f63ua4w8c.css';
import '../../css/u/u7zw3g98x.css';
import '../../css/i/ipb8njfde.css';
import '../../css/b/b9pkkvrtb.css';
import '../../css/q/q48agzbrj.css';
import '../../css/q/q19isopcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbnvcacjp wm-shadow"/><path class="f63ua4w8c wm-k"/><path class="u7zw3g98x wm-k"/><path class="ipb8njfde wm-k"/><path class="b9pkkvrtb wm-k"/><path class="q48agzbrj wm-k"/><path class="q19isopcu wm-shine"/>`,
		"fallback": "withicons-pastel:snowflake",
	});
}

export default Component;
