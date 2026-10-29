import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdgbhdbzt.css';
import '../../css/p/pla9akn6j.css';
import '../../css/x/xwbt8jbcw.css';
import '../../css/m/m7dz4xbax.css';
import '../../css/f/flagi397l.css';
import '../../css/d/drotr3gay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdgbhdbzt wm-shadow"/><path class="pla9akn6j wm-k"/><path class="wm-k xwbt8jbcw"/><path class="m7dz4xbax wm-k"/><path class="flagi397l wm-k"/><path class="drotr3gay wm-shine"/>`,
		"fallback": "withicons-pastel:power",
	});
}

export default Component;
