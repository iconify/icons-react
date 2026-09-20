import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2o_znbdb.css';
import '../../css/v/vh7rfhbtx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2o_znbdb"/><path clip-rule="evenodd" class="vh7rfhbtx"/>`,
		"fallback": "qlementine-icons:trash-full-16",
	});
}

export default Component;
