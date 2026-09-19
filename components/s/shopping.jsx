import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttw5pwbrl.css';

const viewBox = {"width":717,"height":666};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttw5pwbrl"/>`,
		"fallback": "ls:shopping",
	});
}

export default Component;
