import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6ltadbch.css';
import '../../css/k/kr7x2fb8x.css';
import '../../css/s/st5q72b9l.css';
import '../../css/g/gbtrt9bem.css';
import '../../css/e/evqehct3f.css';
import '../../css/a/ag_y68byo.css';
import '../../css/e/erzet3b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6ltadbch wm-shadow"/><path class="kr7x2fb8x wm-k"/><path class="st5q72b9l wm-k"/><path class="gbtrt9bem wm-k"/><path class="evqehct3f wm-k"/><path class="ag_y68byo wm-shine"/><path class="erzet3b6e wm-a"/>`,
		"fallback": "withicons-pastel:regex",
	});
}

export default Component;
