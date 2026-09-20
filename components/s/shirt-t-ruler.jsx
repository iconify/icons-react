import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q96ok-8ie.css';
import '../../css/v/vt_azwhya.css';
import '../../css/b/bj1lwnbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q96ok-8ie"/><rect class="vt_azwhya"/><path class="bj1lwnbio"/></g>`,
		"fallback": "lucide-lab:shirt-t-ruler",
	});
}

export default Component;
