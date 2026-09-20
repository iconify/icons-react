import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uql2cd25u.css';
import '../../css/l/l2fsr4bnk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uql2cd25u"/><path clip-rule="evenodd" class="l2fsr4bnk"/>`,
		"fallback": "teenyicons:mp3-solid",
	});
}

export default Component;
