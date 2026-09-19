import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8ei0x73x.css';
import '../../css/s/s3jbqac2t.css';
import '../../css/e/e616m1bxg.css';
import '../../css/k/kpe56rbuh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m8ei0x73x"/><path class="s3jbqac2t"/><path clip-rule="evenodd" class="e616m1bxg"/><path clip-rule="evenodd" class="kpe56rbuh"/></g>`,
		"fallback": "fluent-emoji-flat:pile-of-poo",
	});
}

export default Component;
