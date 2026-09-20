import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5pm3dbys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m5pm3dbys"/>`,
		"fallback": "streamline-plump:printer-solid",
	});
}

export default Component;
