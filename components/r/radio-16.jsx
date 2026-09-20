import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygc0_0gjy.css';
import '../../css/e/e1lpwkvyq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygc0_0gjy"/><path clip-rule="evenodd" class="e1lpwkvyq"/>`,
		"fallback": "qlementine-icons:radio-16",
	});
}

export default Component;
