import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzi_ombuh.css';
import '../../css/h/hon_1gb9u.css';
import '../../css/n/n6s0vvlpm.css';
import '../../css/z/zdb14ds8k.css';

const viewBox = {"width":32,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kzi_ombuh"/><path class="hon_1gb9u"/><path class="n6s0vvlpm"/><path class="zdb14ds8k"/></g>`,
		"fallback": "fluent-emoji-flat:swan",
	});
}

export default Component;
