import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/t9xmsgbyk.css';
import '../../css/n/n8z6g4nql.css';
import '../../css/g/g0hz8nbtf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="t9xmsgbyk"/><path class="n8z6g4nql"/><path class="g0hz8nbtf"/></g>`,
		"fallback": "icon-park:male",
	});
}

export default Component;
