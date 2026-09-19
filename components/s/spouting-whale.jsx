import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5gsj3gje.css';
import '../../css/f/fij16-bho.css';
import '../../css/f/fq5_rrn4l.css';
import '../../css/w/w25rgrb9f.css';
import '../../css/h/ho7fkytbn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z5gsj3gje"/><path class="fij16-bho"/><path class="fq5_rrn4l"/><path class="w25rgrb9f"/><path class="ho7fkytbn"/></g>`,
		"fallback": "fluent-emoji-flat:spouting-whale",
	});
}

export default Component;
