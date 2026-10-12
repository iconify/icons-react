import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndihgzbwa.css';
import '../../css/a/awn7h3b2c.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndihgzbwa"/><path class="awn7h3b2c"/><path class="zkdyo_ief"/>`,
		"fallback": "energy-icons:mail-minus-20",
	});
}

export default Component;
