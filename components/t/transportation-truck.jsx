import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9xke1qvt.css';
import '../../css/u/u71vq3b-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9xke1qvt"/><path class="u71vq3b-a"/>`,
		"fallback": "streamline-pixel:transportation-truck",
	});
}

export default Component;
