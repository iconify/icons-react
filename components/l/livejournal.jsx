import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btnvbfz_a.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btnvbfz_a"/>`,
		"fallback": "ps:livejournal",
	});
}

export default Component;
