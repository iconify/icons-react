import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/guntzbbhs.css';
import '../../css/t/tay_8uvgz.css';
import '../../css/o/o8yfolhog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="guntzbbhs"/><path class="tay_8uvgz"/><path class="o8yfolhog"/></g>`,
		"fallback": "tabler:photo",
	});
}

export default Component;
