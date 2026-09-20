import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqbjuibkw.css';
import '../../css/c/c49engbjl.css';
import '../../css/u/u0wyggb3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqbjuibkw"/><path class="c49engbjl"/><path class="u0wyggb3l"/>`,
		"fallback": "ooui:logo-wikibooks",
	});
}

export default Component;
