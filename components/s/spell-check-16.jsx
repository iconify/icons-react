import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsdaybuea.css';
import '../../css/t/tx00macjw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hsdaybuea"/><path class="tx00macjw"/>`,
		"fallback": "qlementine-icons:spell-check-16",
	});
}

export default Component;
