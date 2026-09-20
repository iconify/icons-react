import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agydu2b-r.css';
import '../../css/w/w26aucbxb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agydu2b-r"/><path clip-rule="evenodd" class="w26aucbxb"/>`,
		"fallback": "teenyicons:stopwatch-solid",
	});
}

export default Component;
