import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/p4tqp6bcc.css';
import '../../css/i/igczcib5p.css';
import '../../css/k/kyk_96zzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="p4tqp6bcc"/><path class="igczcib5p"/><path class="kyk_96zzu"/></g>`,
		"fallback": "icon-park:memory-card-one",
	});
}

export default Component;
