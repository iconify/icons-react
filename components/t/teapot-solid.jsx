import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vz2352biu.css';
import '../../css/b/bn7vl2b9s.css';
import '../../css/g/gna721brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vz2352biu"/><path class="bn7vl2b9s wm-a"/><path class="gna721brc wm-s"/></g>`,
		"fallback": "withicons:teapot-solid",
	});
}

export default Component;
