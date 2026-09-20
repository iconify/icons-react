import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hjys1obeo.css';
import '../../css/q/q9fv-nbai.css';
import '../../css/y/ygkt1vnmu.css';
import '../../css/a/ak90qhbbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="hjys1obeo"/><path class="q9fv-nbai"/><path class="ygkt1vnmu"/><path class="ak90qhbbj"/></g>`,
		"fallback": "streamline-plump-color:pen-1",
	});
}

export default Component;
