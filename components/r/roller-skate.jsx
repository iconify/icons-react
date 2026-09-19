import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1x18fymj.css';
import '../../css/x/x9h81ab9x.css';
import '../../css/p/p88tiwbbi.css';
import '../../css/m/mgtje0bph.css';
import '../../css/b/bya20ibgt.css';
import '../../css/m/m97y60bqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1x18fymj"/><path class="x9h81ab9x"/><path class="p88tiwbbi"/><path class="mgtje0bph"/><path class="bya20ibgt"/><path class="m97y60bqx"/></g>`,
		"fallback": "fluent-emoji-flat:roller-skate",
	});
}

export default Component;
