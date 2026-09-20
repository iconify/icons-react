import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny-o07b9m.css';
import '../../css/s/synrefcoj.css';
import '../../css/t/t6x2t25-i.css';
import '../../css/w/w8xs_cusf.css';
import '../../css/g/gezk6bbut.css';
import '../../css/f/fk-0bzfrr.css';
import '../../css/a/anrpy964h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny-o07b9m"/><path class="synrefcoj"/><path class="t6x2t25-i"/><path class="w8xs_cusf"/><path class="gezk6bbut"/><path class="fk-0bzfrr"/><path class="anrpy964h"/>`,
		"fallback": "streamline-emojis:umbrella",
	});
}

export default Component;
