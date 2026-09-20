import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zunribbaa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zunribbaa"/>`,
		"fallback": "streamline-plump:layer-mask-solid",
	});
}

export default Component;
