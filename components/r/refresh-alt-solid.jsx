import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq26h3bso.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eq26h3bso"/>`,
		"fallback": "teenyicons:refresh-alt-solid",
	});
}

export default Component;
