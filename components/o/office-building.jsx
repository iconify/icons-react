import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8e3udmdp.css';
import '../../css/k/kw53njz2t.css';
import '../../css/c/chdy3677c.css';
import '../../css/q/qaz8m9jfk.css';
import '../../css/a/ax3ltgq0i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8e3udmdp"/><path class="kw53njz2t"/><path class="chdy3677c"/><path class="qaz8m9jfk"/><path class="ax3ltgq0i"/></g>`,
		"fallback": "fluent-emoji-flat:office-building",
	});
}

export default Component;
