import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb9e1ot7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb9e1ot7f"/>`,
		"fallback": "basil:play-solid",
	});
}

export default Component;
