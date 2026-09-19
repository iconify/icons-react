import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/k/k-pm8hbkw.css';
import '../../css/f/f038fm58r.css';
import '../../css/v/v4a-m_bgf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path clip-rule="evenodd" class="k-pm8hbkw"/><path class="f038fm58r"/><path clip-rule="evenodd" class="v4a-m_bgf"/></g>`,
		"fallback": "fluent-emoji-flat:tired-face",
	});
}

export default Component;
