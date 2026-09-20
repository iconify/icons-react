import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfq8lxbqj.css';
import '../../css/k/k24wn5bei.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfq8lxbqj"/><path clip-rule="evenodd" class="k24wn5bei"/>`,
		"fallback": "teenyicons:spreadsheet-solid",
	});
}

export default Component;
