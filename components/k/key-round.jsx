import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq35sd6ai.css';
import '../../css/b/b9ffadbro.css';
import '../../css/b/b-sgxvq0k.css';
import '../../css/i/it9amcbit.css';
import '../../css/a/auty09_bz.css';
import '../../css/w/w921-9bcj.css';
import '../../css/h/h_7k2ac1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow wq35sd6ai"/><path class="b9ffadbro wm-k"/><path class="b-sgxvq0k wm-k"/><path class="it9amcbit wm-k"/><path class="auty09_bz wm-k"/><path class="w921-9bcj wm-k"/><path class="h_7k2ac1v wm-shine"/>`,
		"fallback": "withicons-pastel:key-round",
	});
}

export default Component;
