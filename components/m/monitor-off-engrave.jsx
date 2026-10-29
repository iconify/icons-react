import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hqbh9vesp.css';
import '../../css/w/w1dkrwbfj.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/u/u-vfx8bll.css';
import '../../css/g/g3cuk7bic.css';
import '../../css/v/vxuqhab0r.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hqbh9vesp wm-k"/><path class="w1dkrwbfj wm-a"/><path class="ol-kpp5cg wm-s"/><path class="u-vfx8bll wm-shadow"/><path class="g3cuk7bic wm-k"/><path class="vxuqhab0r wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:monitor-off-engrave",
	});
}

export default Component;
