import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcqo_kb5m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcqo_kb5m"/>`,
		"fallback": "streamline-flex:sigma",
	});
}

export default Component;
