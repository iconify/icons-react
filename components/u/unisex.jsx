import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfomdp99f.css';
import '../../css/c/clgt-tmqh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xfomdp99f"/><path class="clgt-tmqh"/>`,
		"fallback": "map:unisex",
	});
}

export default Component;
