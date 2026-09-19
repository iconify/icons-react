import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nak3qzbrx.css';
import '../../css/r/ryyszgs8i.css';
import '../../css/a/amqeczbjb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nak3qzbrx"/><path class="ryyszgs8i"/><path class="amqeczbjb"/></g>`,
		"fallback": "fluent-emoji-flat:seat",
	});
}

export default Component;
