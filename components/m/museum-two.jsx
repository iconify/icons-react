import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/h/h3sjv403h.css';
import '../../css/v/vpr5xac0l.css';
import '../../css/b/b-nlqbjlj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="j9hg1or3h"/><path class="h3sjv403h"/><path class="vpr5xac0l"/><path class="b-nlqbjlj"/></g>`,
		"fallback": "icon-park-solid:museum-two",
	});
}

export default Component;
