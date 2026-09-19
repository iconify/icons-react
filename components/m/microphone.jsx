import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak7mb6b3t.css';
import '../../css/j/jfq3qu33i.css';
import '../../css/z/zlg4ve8af.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ak7mb6b3t"/><path class="jfq3qu33i"/><path class="zlg4ve8af"/></g>`,
		"fallback": "fluent-emoji-flat:microphone",
	});
}

export default Component;
