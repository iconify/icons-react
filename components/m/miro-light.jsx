import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbs8e4bit.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbs8e4bit"/>`,
		"fallback": "thesvg-color:miro-light",
	});
}

export default Component;
