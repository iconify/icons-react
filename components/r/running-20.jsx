import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qokocnbbw.css';
import '../../css/v/v9e56nbyl.css';
import '../../css/e/eswagv34a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qokocnbbw"/><path class="v9e56nbyl"/><path class="eswagv34a"/>`,
		"fallback": "energy-icons:running-20",
	});
}

export default Component;
