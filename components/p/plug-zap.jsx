import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/akr9b-bcr.css';
import '../../css/u/uwumm1bec.css';
import '../../css/u/uzpb2scic.css';
import '../../css/d/dkn7dab5t.css';
import '../../css/u/u2rghsf4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="akr9b-bcr wm-shadow"/><path class="uwumm1bec wm-shadow"/><path class="uzpb2scic"/><path class="dkn7dab5t"/><path class="u2rghsf4c wm-s"/></g>`,
		"fallback": "withicons-brutal:plug-zap",
	});
}

export default Component;
