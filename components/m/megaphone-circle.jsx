import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/go96jlqsl.css';
import '../../css/t/tz8c7omyk.css';
import '../../css/g/g_mdxu2az.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="go96jlqsl"/><path class="tz8c7omyk"/><path class="g_mdxu2az"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:megaphone-circle",
	});
}

export default Component;
