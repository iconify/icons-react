import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unnhiupqa.css';
import '../../css/o/o64ssnoeh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unnhiupqa"/><path class="o64ssnoeh"/>`,
		"fallback": "octicon:pivot-column-16",
	});
}

export default Component;
