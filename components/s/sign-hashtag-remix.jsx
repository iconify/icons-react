import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt0me_b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qt0me_b1a"/>`,
		"fallback": "streamline-sharp:sign-hashtag-remix",
	});
}

export default Component;
