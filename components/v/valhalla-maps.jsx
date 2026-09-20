import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnsy8cctb.css';
import '../../css/a/amaky3v5u.css';
import '../../css/m/mtzy7oq7x.css';
import '../../css/s/sa18abbmq.css';
import '../../css/r/r_4ceuibd.css';
import '../../css/s/sfy1vib0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cnsy8cctb"/><path class="amaky3v5u"/><path class="mtzy7oq7x"/><path class="sa18abbmq"/><path class="r_4ceuibd"/><path class="sfy1vib0h"/>`,
		"fallback": "selfhst:valhalla-maps",
	});
}

export default Component;
