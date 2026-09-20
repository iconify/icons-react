import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9di_yx8b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9di_yx8b"/>`,
		"fallback": "streamline:justice-hammer-solid",
	});
}

export default Component;
