import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqyuiws6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqyuiws6f"/>`,
		"fallback": "gravity-ui:object-align-justify-vertical",
	});
}

export default Component;
