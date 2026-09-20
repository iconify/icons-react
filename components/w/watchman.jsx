import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaab5ibre.css';
import '../../css/c/c1rlgi-9k.css';

const viewBox = {"width":420,"height":419};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle paint-order="stroke fill markers" class="qaab5ibre"/><path class="c1rlgi-9k"/>`,
		"fallback": "material-icon-theme:watchman",
	});
}

export default Component;
