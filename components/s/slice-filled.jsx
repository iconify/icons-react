import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh2799bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh2799bqu"/>`,
		"fallback": "lucide-extended:slice-filled",
	});
}

export default Component;
