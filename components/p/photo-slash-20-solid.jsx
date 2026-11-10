import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ada_u3u5b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ada_u3u5b"/>`,
		"fallback": "sidekickicons:photo-slash-20-solid",
	});
}

export default Component;
