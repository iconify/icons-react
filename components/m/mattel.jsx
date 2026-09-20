import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnayzyuky.css';
import '../../css/b/basqtwj7r.css';
import '../../css/p/po2o9fxuh.css';
import '../../css/r/rat1pebnb.css';
import '../../css/k/kjur5hb-c.css';

const viewBox = {"width":899.99,"height":898.06};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnayzyuky"/><path class="basqtwj7r"/><path class="po2o9fxuh"/><path class="rat1pebnb"/><path class="kjur5hb-c"/>`,
		"fallback": "thesvg-color:mattel",
	});
}

export default Component;
