import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv_918bva.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv_918bva"/>`,
		"fallback": "pinhead:leg-with-varicose-veins",
	});
}

export default Component;
