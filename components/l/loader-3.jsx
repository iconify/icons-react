import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xdl40rb2r.css';
import '../../css/u/um318s3ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xdl40rb2r"/><path class="um318s3ug"/></g>`,
		"fallback": "tabler:loader-3",
	});
}

export default Component;
