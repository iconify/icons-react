import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/df_e31bja.css';
import '../../css/b/b7xrf33kq.css';
import '../../css/v/v0fh7rayz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="df_e31bja"/><circle class="b7xrf33kq"/><path class="v0fh7rayz"/></g>`,
		"fallback": "streamline:interface-time-stop-watch-timer-countdown-clock",
	});
}

export default Component;
