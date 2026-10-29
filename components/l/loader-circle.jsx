import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdvr04bkv.css';
import '../../css/a/avda7ebuj.css';
import '../../css/h/hheau9ojh.css';
import '../../css/m/mlo827epr.css';
import '../../css/o/o54814b-a.css';
import '../../css/q/q9d0qkbha.css';
import '../../css/l/lo9prhbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdvr04bkv wm-shadow"/><path class="avda7ebuj"/><path class="hheau9ojh"/><path class="mlo827epr"/><path class="o54814b-a"/><path class="q9d0qkbha wm-shine"/><path class="lo9prhbig"/>`,
		"fallback": "withicons-plush:loader-circle",
	});
}

export default Component;
