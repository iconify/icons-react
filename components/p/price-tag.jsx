import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxo4hmbaa.css';
import '../../css/r/rf258g3jg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxo4hmbaa"/><path class="rf258g3jg"/>`,
		"fallback": "ep:price-tag",
	});
}

export default Component;
