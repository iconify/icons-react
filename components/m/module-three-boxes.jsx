import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0tg69brx.css';
import '../../css/e/ed2t64tga.css';
import '../../css/f/fq7vapbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0tg69brx"/><path class="ed2t64tga"/><path class="fq7vapbgw"/>`,
		"fallback": "streamline-freehand:module-three-boxes",
	});
}

export default Component;
