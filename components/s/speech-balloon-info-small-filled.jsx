import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7c4exb2t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7c4exb2t"/>`,
		"fallback": "dinkie-icons:speech-balloon-info-small-filled",
	});
}

export default Component;
