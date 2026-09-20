import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d167ejb0s.css';
import '../../css/k/kxlmbqjiw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d167ejb0s"/><path class="kxlmbqjiw"/>`,
		"fallback": "streamline-plump:receipt-cross-solid",
	});
}

export default Component;
