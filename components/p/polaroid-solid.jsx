import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnz7wtb5c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnz7wtb5c"/>`,
		"fallback": "streamline-plump:polaroid-solid",
	});
}

export default Component;
