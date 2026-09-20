import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhafzrngg.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhafzrngg"/>`,
		"fallback": "material-icon-theme:semantic-release-light",
	});
}

export default Component;
