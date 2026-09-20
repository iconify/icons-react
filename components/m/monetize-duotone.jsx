import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-v_mj_8z.css';
import '../../css/v/v4evbjbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-v_mj_8z"/><path class="v4evbjbik"/>`,
		"fallback": "stash:monetize-duotone",
	});
}

export default Component;
