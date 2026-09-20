import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shhnvhbjh.css';
import '../../css/d/duhqzbmzv.css';
import '../../css/w/wsw23sbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shhnvhbjh"/><path class="duhqzbmzv"/><path class="wsw23sbga"/>`,
		"fallback": "streamline-freehand:photo-frame-landscape",
	});
}

export default Component;
