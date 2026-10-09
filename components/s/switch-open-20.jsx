import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v44e49byk.css';
import '../../css/a/aw5adu44q.css';
import '../../css/c/ct5hu_u7h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v44e49byk"/><path class="aw5adu44q"/><path class="ct5hu_u7h"/>`,
		"fallback": "energy-icons:switch-open-20",
	});
}

export default Component;
