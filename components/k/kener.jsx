import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya79xjbtw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya79xjbtw"/>`,
		"fallback": "selfhst:kener",
	});
}

export default Component;
