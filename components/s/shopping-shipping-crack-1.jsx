import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsvramvwf.css';
import '../../css/u/ui153smtr.css';
import '../../css/s/su2qj0crx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsvramvwf"/><path class="ui153smtr"/><path class="su2qj0crx"/>`,
		"fallback": "streamline-pixel:shopping-shipping-crack-1",
	});
}

export default Component;
