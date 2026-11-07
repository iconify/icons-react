import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkklelgka.css';
import '../../css/l/lc21qzuqt.css';
import '../../css/u/uhr9dibke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dkklelgka"/><path class="lc21qzuqt"/><path class="uhr9dibke"/>`,
		"fallback": "solar:user-check-rounded-bold-duotone",
	});
}

export default Component;
