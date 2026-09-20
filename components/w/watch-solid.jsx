import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ody6ekxva.css';
import '../../css/m/msx52gb2q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ody6ekxva"/><path class="msx52gb2q"/>`,
		"fallback": "teenyicons:watch-solid",
	});
}

export default Component;
