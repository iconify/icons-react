import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocj-akbzq.css';
import '../../css/u/ug5oqdb4t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocj-akbzq"/><path clip-rule="evenodd" class="ug5oqdb4t"/>`,
		"fallback": "teenyicons:tag-solid",
	});
}

export default Component;
