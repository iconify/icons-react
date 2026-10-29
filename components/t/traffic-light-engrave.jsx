import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gwth-_hib.css';
import '../../css/j/jd7su4bny.css';
import '../../css/o/o2v087bye.css';
import '../../css/h/hqyg-9bir.css';
import '../../css/p/p0q2sxjnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gwth-_hib wm-k"/><path class="jd7su4bny wm-a"/><path class="o2v087bye wm-shadow"/><path class="hqyg-9bir wm-k"/><path class="p0q2sxjnz wm-a"/></g>`,
		"fallback": "withicons:traffic-light-engrave",
	});
}

export default Component;
