import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gd5ygyb4r.css';
import '../../css/h/ht_kdnlyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gd5ygyb4r"/><path class="ht_kdnlyp"/></g>`,
		"fallback": "coolicons:scale-duocolor-round",
	});
}

export default Component;
