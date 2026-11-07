import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft_uoeb3f.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft_uoeb3f"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:undo-left-round-square-outline",
	});
}

export default Component;
