import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-jq4rd8c.css';
import '../../css/x/x1vncw3xi.css';
import '../../css/y/y4i3220kc.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-jq4rd8c"/><path class="x1vncw3xi"/><path class="y4i3220kc"/><path class="zkdyo_ief"/>`,
		"fallback": "energy-icons:tag-plus-20",
	});
}

export default Component;
