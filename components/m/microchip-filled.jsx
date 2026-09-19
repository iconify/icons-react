import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh60aydpi.css';
import '../../css/v/v_2n0eezf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="fh60aydpi"/><path class="v_2n0eezf"/>`,
		"fallback": "boxicons:microchip-filled",
	});
}

export default Component;
