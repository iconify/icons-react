import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg_chdsru.css';
import '../../css/t/tvvddzg0c.css';
import '../../css/o/ouv_rburk.css';
import '../../css/d/dpxfv0boz.css';
import '../../css/q/q2hww7baa.css';
import '../../css/r/ruuuk979k.css';
import '../../css/t/tmf1gsurg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg_chdsru wm-shadow"/><path class="tvvddzg0c wm-k"/><path class="ouv_rburk wm-k"/><path class="dpxfv0boz wm-k"/><path class="q2hww7baa wm-k"/><path class="ruuuk979k wm-k"/><path class="tmf1gsurg wm-shine"/>`,
		"fallback": "withicons-pastel:lamp-desk",
	});
}

export default Component;
