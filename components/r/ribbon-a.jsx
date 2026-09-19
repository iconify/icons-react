import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlibpwbcq.css';
import '../../css/z/z0_3rqbiy.css';
import '../../css/h/hm6g4h_9h.css';
import '../../css/h/hfp3rvbzb.css';
import '../../css/s/slpq6x9ya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlibpwbcq"/><path class="z0_3rqbiy"/><path class="hm6g4h_9h"/><path class="hfp3rvbzb"/><path class="slpq6x9ya"/>`,
		"fallback": "ion:ribbon-a",
	});
}

export default Component;
