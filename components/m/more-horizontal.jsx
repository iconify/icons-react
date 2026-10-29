import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggpjqcbho.css';
import '../../css/v/vvze8ac2o.css';
import '../../css/s/sbyepeviz.css';
import '../../css/o/ou_jw0btw.css';
import '../../css/t/tjm9_wb4x.css';
import '../../css/a/aaqkj0b-l.css';
import '../../css/g/g9r928b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggpjqcbho wm-shadow"/><path class="vvze8ac2o wm-k"/><path class="sbyepeviz wm-k"/><path class="ou_jw0btw wm-k"/><path class="tjm9_wb4x wm-k"/><path class="aaqkj0b-l wm-k"/><path class="g9r928b-j wm-shine"/>`,
		"fallback": "withicons-pastel:more-horizontal",
	});
}

export default Component;
