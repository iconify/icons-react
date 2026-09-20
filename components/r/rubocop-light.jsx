import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3u62pbrn.css';
import '../../css/x/x839c0i8y.css';
import '../../css/y/y_7o9gs7y.css';
import '../../css/k/k31u2gbrh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3u62pbrn"/><path class="x839c0i8y"/><path class="y_7o9gs7y"/><path class="k31u2gbrh"/>`,
		"fallback": "material-icon-theme:rubocop-light",
	});
}

export default Component;
