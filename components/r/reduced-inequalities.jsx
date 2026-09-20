import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwhv-n8ep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwhv-n8ep"/>`,
		"fallback": "streamline:reduced-inequalities",
	});
}

export default Component;
