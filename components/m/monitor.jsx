import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mglosereo.css';
import '../../css/d/d55t8r3lu.css';
import '../../css/s/szfyo-b8a.css';
import '../../css/n/n8n743bki.css';
import '../../css/n/nn7rqpb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mglosereo wm-shadow"/><path class="d55t8r3lu"/><path class="szfyo-b8a"/><path class="n8n743bki"/><path class="nn7rqpb2r"/></g>`,
		"fallback": "withicons-retro:monitor",
	});
}

export default Component;
