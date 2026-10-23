import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu3j9k8yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu3j9k8yt"/>`,
		"fallback": "vadivam:tablets",
	});
}

export default Component;
