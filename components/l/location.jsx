import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v89fl4bla.css';
import '../../css/o/o4cgy6nli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v89fl4bla"/><path class="o4cgy6nli"/>`,
		"fallback": "famicons:location",
	});
}

export default Component;
