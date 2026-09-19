import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eocglkw9k.css';
import '../../css/a/awir01b8j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eocglkw9k"/><path class="awir01b8j"/>`,
		"fallback": "carbon:requirement-definition",
	});
}

export default Component;
