import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/occ1h7r-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="occ1h7r-r"/>`,
		"fallback": "streamline-sharp:microscope-observation-sciene-solid",
	});
}

export default Component;
