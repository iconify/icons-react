import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ergqbgbqv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ergqbgbqv"/>`,
		"fallback": "dinkie-icons:speech-balloon-empty-small",
	});
}

export default Component;
