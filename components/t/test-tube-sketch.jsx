import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/epq66ab8j.css';
import '../../css/v/v7mb0kbtd.css';
import '../../css/o/o-pigdbeu.css';
import '../../css/o/okk-zsb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="epq66ab8j"/><path class="v7mb0kbtd wm-k"/><path class="o-pigdbeu wm-k"/><path class="okk-zsb9b wm-a"/></g>`,
		"fallback": "withicons:test-tube-sketch",
	});
}

export default Component;
