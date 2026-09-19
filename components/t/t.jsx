import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb_xxc1-a.css';

const viewBox = {"width":255,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb_xxc1-a"/>`,
		"fallback": "ls:t",
	});
}

export default Component;
