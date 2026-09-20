import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9eokvp7t.css';
import '../../css/w/w17inbchm.css';
import '../../css/u/uuguc0g7o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9eokvp7t"/><path clip-rule="evenodd" class="w17inbchm"/><path class="uuguc0g7o"/>`,
		"fallback": "teenyicons:school-solid",
	});
}

export default Component;
