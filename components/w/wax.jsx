import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjf5gjz3h.css';
import '../../css/g/gbrlv6bnu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="xjf5gjz3h"/><path class="gbrlv6bnu"/></g>`,
		"fallback": "cryptocurrency-color:wax",
	});
}

export default Component;
