import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq0ae0b0p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq0ae0b0p"/>`,
		"fallback": "bytesize:sign-out",
	});
}

export default Component;
