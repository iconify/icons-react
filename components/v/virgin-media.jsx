import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r70tn72qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r70tn72qw"/>`,
		"fallback": "thesvg:virgin-media",
	});
}

export default Component;
